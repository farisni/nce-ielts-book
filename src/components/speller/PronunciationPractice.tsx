"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Square, Loader2, Volume2 } from "lucide-react";

/**
 * 发音评测：录音 → 上传讯飞 → 显示评分
 * - 目标句子由父组件传入（sentence.en）
 * - 录音转 16kHz 16bit 单声道 PCM 后上传
 */
export default function PronunciationPractice({
  sentence,
  onPlayVoice,
}: {
  /** 目标句子（评测文本） */
  sentence: string
  /** 播放标准发音的回调（可选） */
  onPlayVoice?: () => void
}) {
  const [recording, setRecording] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recordingSec, setRecordingSec] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  // 清理：卸载时停止录音
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      mediaRecorderRef.current?.stream.getTracks().forEach((t) => t.stop());
    };
  }, []);

  // 提取评分字段（讯飞 ise_unite=1 返回格式）
  const extractScores = (data: Record<string, unknown>) => {
    const d = data as Record<string, any>;
    return {
      total: Number(d.total_score ?? d.score ?? 0),
      accuracy: Number(d.accuracy_score ?? 0),
      fluency: Number(d.fluency_score ?? 0),
      integrity: Number(d.integrity_score ?? 0),
      iseResult: d.ise_result ?? null,
    };
  };

  const startRecording = useCallback(async () => {
    setError(null);
    setResult(null);
    try {
      // 录 16kHz 16bit 单声道 PCM（讯飞要求）
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioCtx = new AudioContext({ sampleRate: 16000 });
      const source = audioCtx.createMediaStreamSource(stream);
      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      const pcmChunks: Int16Array[] = [];

      processor.onaudioprocess = (e) => {
        const input = e.inputBuffer.getChannelData(0);
        const pcm = new Int16Array(input.length);
        for (let i = 0; i < input.length; i++) {
          const s = Math.max(-1, Math.min(1, input[i]));
          pcm[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
        }
        pcmChunks.push(pcm);
      };

      source.connect(processor);
      processor.connect(audioCtx.destination);

      // 使用 MediaRecorder 兜底？这里用 ScriptProcessor 收集 PCM，结束后合成
      setRecording(true);
      setRecordingSec(0);
      timerRef.current = window.setInterval(() => setRecordingSec((s) => s + 1), 1000);

      // 暂存到全局，供 stop 使用
      (window as any).__pcmChunks = pcmChunks;
      (window as any).__audioCtx = audioCtx;
      (window as any).__pcmStream = stream;
      (window as any).__processor = processor;
      (window as any).__source = source;
    } catch (e) {
      setError("无法访问麦克风：" + ((e as Error).message || "请检查权限"));
    }
  }, []);

  const stopRecording = useCallback(async () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    setRecording(false);

    const pcmChunks = (window as any).__pcmChunks as Int16Array[];
    const audioCtx = (window as any).__audioCtx as AudioContext;
    const stream = (window as any).__pcmStream as MediaStream;
    const processor = (window as any).__processor;
    const source = (window as any).__source;

    if (!pcmChunks || pcmChunks.length === 0) {
      setError("未采集到音频");
      return;
    }

    // 停止所有音轨
    stream?.getTracks().forEach((t) => t.stop());
    source?.disconnect();
    processor?.disconnect();

    // 合成 PCM
    const totalLen = pcmChunks.reduce((acc, c) => acc + c.length, 0);
    const pcm = new Int16Array(totalLen);
    let offset = 0;
    for (const c of pcmChunks) {
      pcm.set(c, offset);
      offset += c.length;
    }

    await audioCtx?.close();

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
      setResult(extractScores(json.result));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setEvaluating(false);
    }
  }, [sentence]);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* 录音按钮 */}
      <div className="flex items-center gap-3">
        {!recording ? (
          <button
            type="button"
            onClick={startRecording}
            disabled={evaluating}
            className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/60 disabled:opacity-50"
          >
            <Mic className="size-4" />
            跟读录音
          </button>
        ) : (
          <button
            type="button"
            onClick={stopRecording}
            className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/20"
          >
            <Square className="size-4 fill-current" />
            停止 ({recordingSec}s)
          </button>
        )}
        {onPlayVoice && (
          <button
            type="button"
            onClick={onPlayVoice}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60"
          >
            <Volume2 className="size-4" />
            听标准发音
          </button>
        )}
      </div>

      {/* 评测中 */}
      {evaluating && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" />
          正在评测发音…
        </div>
      )}

      {/* 评分结果 */}
      {result && !evaluating && (
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
      )}

      {/* 错误 */}
      {error && !evaluating && (
        <div className="text-sm text-rose-500">{error}</div>
      )}
    </div>
  );
}
