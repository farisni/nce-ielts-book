"use client"

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Loader2, AlertTriangle, Mic } from "lucide-react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/plugins/record";

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
 * - 录音用 wavesurfer RecordPlugin：滚动实时波形（与播放声波图同一库），
 *   停止后把 blob 转 16kHz 16bit 单声道 PCM 上传讯飞
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
  /** 录音状态上报（父组件 footer 按钮在录音/停止间切换样式） */
  onRecordingChange?: (recording: boolean, sec: number) => void
  /** 声波图容器（父组件的播放声波图区域）：录音时接管同一区域，不另开区域 */
  waveContainer?: { current: HTMLDivElement | null }
}>(function PronunciationPractice({
  sentence,
  onPlayVoice,
  onEvaluationSuccess,
  initialResult,
  onResult,
  onRecordingChange,
  waveContainer,
}, ref) {
  const [recording, setRecording] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  // 默认不显示历史评分，只有本次录音返回时才展示（initialResult 仅作历史留存，不默认亮出）
  const [result, setResult] = useState<EvalResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recordingSec, setRecordingSec] = useState(0); // 录音秒数（footer 停止按钮显示用）

  // 录音状态上报：开始/停止/秒数变化都通知父组件（footer 按钮样式切换）
  useEffect(() => {
    onRecordingChange?.(recording, recordingSec)
  }, [recording, recordingSec, onRecordingChange])

  // 录音波形：WaveSurfer + RecordPlugin（滚动实时波形，与播放声波图同一库、同一视觉）。
  // 容器复用父组件的播放声波图区域（waveContainer），未提供时退回自己渲染
  const waveBoxRef = useRef<HTMLDivElement | null>(null)
  const waveSurferRef = useRef<WaveSurfer | null>(null)
  const recordPluginRef = useRef<RecordPlugin | null>(null)

  // 清理：卸载时销毁 wavesurfer（内部停流、释放麦克风）
  useEffect(() => {
    return () => {
      // 同上：先 stopMic 取消 once 订阅，避免 destroy 时 double-close AudioContext
      try { recordPluginRef.current?.stopMic() } catch { /* ignore */ }
      try { waveSurferRef.current?.destroy() } catch { /* ignore */ }
      waveSurferRef.current = null
      recordPluginRef.current = null
    }
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

  /** 评测录到的音频：解码 → 16kHz 16bit 单声道 PCM → 讯飞 */
  const evaluateBlob = useCallback(async (audioBlob: Blob) => {
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
  }, [sentence, onEvaluationSuccess, onResult]);

  // 最新 evaluateBlob 引用：父组件回调（onResult 等）每次渲染都是新引用，
  // 若直接作录音 effect 依赖会导致 effect 反复重建 wavesurfer、意外停掉录音
  const evaluateBlobRef = useRef(evaluateBlob)
  useEffect(() => {
    evaluateBlobRef.current = evaluateBlob
  }, [evaluateBlob])

  // 录音启动：recording=true 后创建 WaveSurfer + RecordPlugin。
  // 容器优先用父组件的播放声波图区域（同一区域切换模式），父组件录音中已停掉播放波形；
  // 未提供容器时退回自己渲染的区域（ref 在渲染后才有值，不能在 startRecording 里直接创建）
  useEffect(() => {
    if (!recording) return
    const container = waveContainer?.current ?? waveBoxRef.current
    if (!container) return
    let cancelled = false
    const wavesurfer = WaveSurfer.create({
      container,
      height: 60,
      waveColor: "rgb(56 189 248 / 0.75)",
      progressColor: "rgb(14 165 233)",
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
    })
    const rec = RecordPlugin.create({
      scrollingWaveform: true, // 滚动实时波形（当前音量 + 已录窗口）
      renderRecordedAudio: false, // 录完不渲染成品波形，评测结果由后端给出
      mimeType: "audio/webm",
    })
    wavesurfer.registerPlugin(rec)
    // 秒数：record-progress 每帧触发，只在整数秒变化时 setState，避免多余渲染
    rec.on("record-progress", (ms) => {
      const s = Math.floor(ms / 1000)
      setRecordingSec((prev) => (prev === s ? prev : s))
    })
    // 停止录音后拿到 blob，走评测流程（用 ref 取最新回调，effect 只依赖 recording）
    rec.on("record-end", (blob) => { evaluateBlobRef.current(blob) })
    waveSurferRef.current = wavesurfer
    recordPluginRef.current = rec
    rec.startRecording()
      .then(() => { if (!cancelled) setRecordingSec(0) })
      .catch((e: Error) => {
        if (cancelled) return
        setError("无法访问麦克风：" + (e.message.replace(/^Error accessing the microphone: /, "") || "请检查权限"))
        setRecording(false) // cleanup 会销毁 wavesurfer
      })
    return () => {
      cancelled = true
      // RecordPlugin destroy 有 double-close bug：once("destroy") 订阅与 stopMic() 都会调用
      // onDestroy（close AudioContext），第二次 close 抛 InvalidStateError。
      // 先手动 stopMic()（取消 once 订阅），destroy 时不再重复 close
      try { recordPluginRef.current?.stopMic() } catch { /* ignore */ }
      try { wavesurfer.destroy() } catch { /* ignore */ }
      waveSurferRef.current = null
      recordPluginRef.current = null
    }
  }, [recording])

  const startRecording = useCallback(() => {
    setError(null)
    setResult(null)
    setRecording(true)
  }, [])

  const stopRecording = useCallback(() => {
    // 先停录音（record-end 异步触发 → evaluateBlob），再收波形
    recordPluginRef.current?.stopRecording()
    setRecording(false) // cleanup 销毁 wavesurfer
  }, [])

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

      {/* 录音中 / 评测中 / 评分结果共用固定高度槽位：状态切换（波形→评测→评分）不引起上下区域跳动 */}
      <div className="flex min-h-[84px] w-full items-center justify-center">
        {/* 录音实时波形：复用父组件声波图区域（waveContainer），无容器时退回自己渲染 */}
        {recording && !waveContainer ? (
          <div ref={waveBoxRef} className="w-full max-w-sm" />
        ) : recording ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mic className="size-4" />
            正在录音 {recordingSec}s…
          </div>
        ) : evaluating ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            正在评测发音…
          </div>
        ) : result ? (
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
        ) : null}
      </div>

    </div>
  );
});

export default PronunciationPractice;
