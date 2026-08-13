"use client"

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Loader2, AlertTriangle } from "lucide-react";

/**
 * 全局复用单个 AudioContext（用于解码 webm/opus）。
 * 避免每次评测都 new AudioContext 导致资源累积/潜在挂起。
 * OfflineAudioContext 不受在线 context 数量影响，可放心每次新建。
 */
let sharedAudioCtx: AudioContext | null = null
function getSharedCtx(): AudioContext {
  if (!sharedAudioCtx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    sharedAudioCtx = new Ctor()
  }
  return sharedAudioCtx
}

/**
 * 裁剪首尾静音，只保留有效语音段。
 * 讯飞对整段音频做语音检测，若首尾静音过长（点录音后犹豫、念完没及时停），
 * 有效语音占比太低会被判 0x7011"没有音频输入"。这里把静音切掉只发语音段。
 */
function trimSilence(floatAudio: Float32Array, sampleRate: number): Float32Array {
  const frame = Math.floor(sampleRate * 0.01) // 10ms 一帧
  const threshold = 0.005
  let start = 0
  let end = floatAudio.length
  // 找起点：跳过 RMS 低于阈值的帧
  for (let i = 0; i < floatAudio.length; i += frame) {
    let sum = 0
    const jEnd = Math.min(i + frame, floatAudio.length)
    for (let j = i; j < jEnd; j++) sum += floatAudio[j] * floatAudio[j]
    if (Math.sqrt(sum / (jEnd - i)) >= threshold) {
      start = i
      break
    }
  }
  // 找终点：从尾部倒着跳过静音帧
  for (let i = floatAudio.length; i > 0; i -= frame) {
    let sum = 0
    const jStart = Math.max(i - frame, 0)
    for (let j = jStart; j < i; j++) sum += floatAudio[j] * floatAudio[j]
    if (Math.sqrt(sum / (i - jStart)) >= threshold) {
      end = i
      break
    }
  }
  if (end - start < Math.floor(sampleRate * 0.2)) return floatAudio // 裁剪后太短则用原样
  const out = new Float32Array(end - start)
  out.set(floatAudio.subarray(start, end))
  return out
}

/** 评测结果（后端已把讯飞 XML 归一化为 0-100 分） */
export type EvalResult = {
  total: number
  accuracy: number
  fluency: number
  integrity: number
  isRejected: boolean
  exceptInfo: string
  exceptMessage: string
  words: { word: string; score: number; wrong: boolean }[]
}

/**
 * 发音评测：录音 → 上传讯飞 → 显示评分
 * - 目标句子由父组件传入（sentence.en）
 * - 录音转 16kHz 16bit 单声道 PCM 后上传
 * - 受控组件：initialResult 恢复历史评分，onResult 上报本次结果（父组件按句保存）
 * - 通过 ref 暴露 toggle()，供父组件绑定快捷键（F5）触发录音/停止
 */
export type PronunciationPracticeHandle = {
  /** 切换录音状态：未录音 → 开始；录音中 → 停止并评分 */
  toggle: () => void
}

const PronunciationPractice = forwardRef<PronunciationPracticeHandle, {
  /** 目标句子（评测文本） */
  sentence: string
  /** 播放标准发音的回调（可选） */
  onPlayVoice?: () => void
  /** 评测成功完成时播放提示音（乱读等被拒结果不触发） */
  onEvaluationSuccess?: () => void
  /** 该句的历史评分（切句回来看评分用；null 表示没有） */
  initialResult?: EvalResult | null
  /** 评测完成回调（父组件用于保存该句评分） */
  onResult?: (r: EvalResult) => void
}>(function PronunciationPractice({
  sentence,
  onPlayVoice,
  onEvaluationSuccess,
  initialResult,
  onResult,
}, ref) {
  const [recording, setRecording] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  // 默认不显示历史评分，只有本次录音返回时才展示（initialResult 仅作历史留存，不默认亮出）
  const [result, setResult] = useState<EvalResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recordingSec, setRecordingSec] = useState(0); // 录音秒数（footer 停止按钮显示用）

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<number | null>(null)
  // 声波可视化：AnalyserNode + rAF 绘制
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const waveCtxRef = useRef<AudioContext | null>(null)
  const waveSourceRef = useRef<MediaStreamAudioSourceNode | null>(null)

  // 清理：卸载时停止录音与声波绘制
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      waveSourceRef.current?.disconnect()
      waveCtxRef.current?.close().catch(() => {})
      mediaRecorderRef.current?.stream.getTracks().forEach((t) => t.stop())
    }
  }, [])

  /** 实时声波绘制：从 AnalyserNode 读时域数据，画一排随音量跳动的竖条 */
  const drawWave = useCallback(() => {
    const canvas = canvasRef.current
    const analyser = analyserRef.current
    if (!canvas || !analyser) return
    const ctx2d = canvas.getContext("2d")
    if (!ctx2d) return
    const data = new Uint8Array(analyser.fftSize)
    analyser.getByteTimeDomainData(data)
    const W = canvas.width
    const H = canvas.height
    const BARS = 48
    ctx2d.clearRect(0, 0, W, H)
    const barW = W / BARS
    for (let i = 0; i < BARS; i++) {
      const start = Math.floor((i / BARS) * data.length)
      const end = Math.floor(((i + 1) / BARS) * data.length)
      let sum = 0
      for (let j = start; j < end; j++) sum += Math.abs(data[j] - 128)
      const avg = (sum / Math.max(1, end - start)) / 128 // 0~1
      const h = Math.max(3, avg * H * 0.92)
      const x = i * barW + barW * 0.18
      const w = barW * 0.64
      const y = (H - h) / 2
      ctx2d.fillStyle = "rgb(56 189 248 / 0.75)"
      ctx2d.beginPath()
      ctx2d.roundRect(x, y, w, h, Math.min(w / 2, 3))
      ctx2d.fill()
    }
    rafRef.current = requestAnimationFrame(drawWave)
  }, [])

  /** 开始声波可视化（录音时调用） */
  const startWave = useCallback(async (stream: MediaStream) => {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!Ctor || !canvasRef.current) return
    const actx = new Ctor()
    try { await actx.resume() } catch { /* ignore */ }
    const source = actx.createMediaStreamSource(stream)
    const analyser = actx.createAnalyser()
    analyser.fftSize = 256
    analyser.smoothingTimeConstant = 0.75
    source.connect(analyser)
    waveCtxRef.current = actx
    waveSourceRef.current = source
    analyserRef.current = analyser
    // 匹配 canvas 实际渲染尺寸（CSS 高度固定，宽度自适应）
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(canvas.clientWidth * dpr)
    canvas.height = Math.round(canvas.clientHeight * dpr)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(drawWave)
  }, [drawWave])

  /** 停止声波可视化（停止录音时调用） */
  const stopWave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    waveSourceRef.current?.disconnect()
    waveSourceRef.current = null
    analyserRef.current = null
    waveCtxRef.current?.close().catch(() => {})
    waveCtxRef.current = null
    // 清空画布
    const canvas = canvasRef.current
    if (canvas) canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height)
  }, [])

  // 后端已把讯飞 XML 解析成结构化 JSON，前端直接消费
  // result: { total, accuracy, fluency, integrity, isRejected, exceptInfo, exceptMessage, words[] }
  const extractScores = (raw: unknown) => {
    const r = (raw ?? {}) as Record<string, any>;
    return {
      total: Number(r.total) || 0,
      accuracy: Number(r.accuracy) || 0,
      fluency: Number(r.fluency) || 0,
      integrity: Number(r.integrity) || 0,
      isRejected: !!r.isRejected,
      exceptInfo: String(r.exceptInfo ?? ""),
      exceptMessage: String(r.exceptMessage ?? ""),
      words: Array.isArray(r.words) ? r.words : [],
    };
  };

  const startRecording = useCallback(async () => {
    setError(null);
    setResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // MediaRecorder 录音（浏览器原生编解码 webm/opus，稳定可靠）。
      // 实测之前 ScriptProcessor 采集在 Chrome 下会被 AudioContext 上限/挂起影响 → 全静音。
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = chunks;

      // 启动实时声波可视化（复用同一 stream）
      startWave(stream);

      setRecording(true);
      setRecordingSec(0);
      timerRef.current = window.setInterval(() => setRecordingSec((s) => s + 1), 1000);
    } catch (e) {
      setError("无法访问麦克风：" + ((e as Error).message || "请检查权限"));
    }
  }, [startWave]);

  const stopRecording = useCallback(async () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    stopWave();
    setRecording(false);

    const mediaRecorder = mediaRecorderRef.current;
    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      setError("未采集到音频");
      return;
    }
    const chunks = chunksRef.current;

    // 停止录音，并等待 onstop 事件（保证最后的 ondataavailable 已触发）
    await new Promise<void>((resolve) => {
      mediaRecorder.onstop = () => resolve();
      mediaRecorder.stop();
    });
    mediaRecorder.stream.getTracks().forEach((t) => t.stop());
    mediaRecorderRef.current = null;

    if (chunks.length === 0) {
      setError("未采集到音频");
      return;
    }

    // 合并录到的音频 blob（MediaRecorder 默认输出 webm/opus）
    const audioBlob = new Blob(chunks, { type: chunks[0].type || "audio/webm" });

    // 解码：复用全局共享 AudioContext
    const audioCtx = getSharedCtx()
    try { audioCtx.resume?.() } catch { /* ignore */ }
    let decoded: AudioBuffer
    try {
      const arrayBuf = await audioBlob.arrayBuffer();
      decoded = await audioCtx.decodeAudioData(arrayBuf);
    } catch {
      setError("音频解码失败，请重试");
      return;
    }
    const srcSampleRate = decoded.sampleRate || 48000;
    // 合并所有声道取平均——很多 USB/蓝牙麦克风录成多声道，声音可能在右声道，
    // 只取 channel 0 会拿到全静音 → 误报"几乎没录到声音"（这就是偶发静音的根因）
    let floatAudio: Float32Array = decoded.getChannelData(0)
    if (decoded.numberOfChannels > 1) {
      const merged = new Float32Array(floatAudio.length)
      for (let ch = 0; ch < decoded.numberOfChannels; ch++) {
        const chData = decoded.getChannelData(ch)
        for (let i = 0; i < merged.length; i++) merged[i] += chData[i]
      }
      for (let i = 0; i < merged.length; i++) merged[i] /= decoded.numberOfChannels
      floatAudio = merged
    }

    // 能量校验：用真正的 RMS（开平方），阈值 0.005 远低于正常语音（TTS 约 0.17），
    // 只在真静音时拦截。合并声道后不会误判。
    const meanSq = floatAudio.reduce((sum, v) => sum + v * v, 0) / Math.max(1, floatAudio.length);
    const rms = Math.sqrt(meanSq);
    const seconds = floatAudio.length / srcSampleRate;
    if (rms < 0.005) {
      setError("几乎没录到声音，请靠近麦克风后重试");
      return;
    }
    if (seconds < 0.5) {
      setError("录音太短，请至少朗读半秒");
      return;
    }

    // 裁剪首尾静音：点录音后犹豫、念完没及时停会产生大段静音，
    // 讯飞整段做语音检测，有效语音占比太低会被判 0x7011"没有音频输入"
    floatAudio = trimSilence(floatAudio, srcSampleRate);

    // 用 OfflineAudioContext 重采样到 16kHz（不受在线 AudioContext 上限限制）
    const offline = new OfflineAudioContext(1, Math.ceil((floatAudio.length / srcSampleRate) * 16000), 16000);
    const buffer = offline.createBuffer(1, floatAudio.length, srcSampleRate);
    buffer.getChannelData(0).set(floatAudio);
    const srcNode = offline.createBufferSource();
    srcNode.buffer = buffer;
    srcNode.connect(offline.destination);
    srcNode.start(0);
    const rendered = await offline.startRendering();

    // 转 Int16 PCM
    const data = rendered.getChannelData(0);
    const pcm = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) {
      const s = Math.max(-1, Math.min(1, data[i]));
      pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }

    // 评测
    setEvaluating(true);
    try {
      const blob = new Blob([pcm.buffer], { type: "audio/pcm" });
      const formData = new FormData();
      formData.append("audio", blob, "recording.pcm");
      formData.append("text", sentence);

      const res = await fetch("/api/pronunciation", { method: "POST", body: formData });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || "评测失败");
      const scores = extractScores(json.result);
      setResult(scores);
      onResult?.(scores); // 上报父组件，按句保存历史
      if (!scores.isRejected) onEvaluationSuccess?.();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setEvaluating(false);
    }
  }, [sentence, onEvaluationSuccess, onResult, stopWave]);

  // 对外暴露 toggle：录音中 → 停止；未录音 → 开始（供 F5 快捷键调用）
  useImperativeHandle(ref, () => ({
    toggle: () => {
      if (recording) stopRecording()
      else startRecording()
    },
  }), [recording, startRecording, stopRecording]);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* 错误提示（如“几乎没录到声音”）：显示在录音按钮上方，便于看到后调整收音 */}
      {error && !evaluating && (
        <div className="text-sm text-rose-500">{error}</div>
      )}

      {/* 声波图：录音时实时显示音量波形 */}
      {recording && (
        <canvas
          ref={canvasRef}
          className="h-12 w-full max-w-sm"
          style={{ display: "block" }}
        />
      )}

      {/* 评测中 */}
      {evaluating && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" />
          正在评测发音…
        </div>
      )}

      {/* 评分结果 */}
      {result && !evaluating && (
        <div className="flex flex-col items-center gap-3">
          {/* 被拒时优先展示原因，不再让用户看到误导性的 0 分 */}
          {result.isRejected && (
            <div className="flex max-w-md items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2.5 text-sm text-amber-700">
              <AlertTriangle className="size-4 shrink-0" />
              <span>
                {result.exceptMessage || "引擎未识别到有效发音，请靠近麦克风重新朗读"}
              </span>
            </div>
          )}
          <div className="flex items-center gap-6 rounded-lg border border-border bg-muted/30 px-6 py-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500">{Math.round(Number(result.total))}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">总分</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{Math.round(Number(result.accuracy))}</div>
              <div className="text-xs text-muted-foreground">准确度</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{Math.round(Number(result.fluency))}</div>
              <div className="text-xs text-muted-foreground">流利度</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{Math.round(Number(result.integrity))}</div>
              <div className="text-xs text-muted-foreground">完整度</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
});

export default PronunciationPractice;
