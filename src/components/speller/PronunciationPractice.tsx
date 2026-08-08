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

  // 解析讯飞返回的 XML 评测结果：总分 + 各维度分 + 单词级详情
  // 讯飞英文句子返回 <read_chapter>/<read_sentence> 节点带分；
  // word 节点含每个词的分和 dp_message（0正常/16漏读/32增读/64回读/128替换）
  const extractScores = (xmlText: string) => {
    const doc = new DOMParser().parseFromString(xmlText, "text/xml");
    // 优先找带分节点，取分数较高者
    const chapter = doc.querySelector("read_chapter");
    const sentence = doc.querySelector("read_sentence");
    const scored = chapter || sentence || doc.querySelector("xml_result");
    const pick = (node: Element | null, name: string): number => {
      const v = node?.getAttribute(name);
      return v ? Number(v) : 0;
    };
    // 总分：多个候选节点取最大，避免读到 0
    const total = Math.max(
      pick(chapter, "total_score"),
      pick(sentence, "total_score"),
      pick(scored, "total_score"),
    );
    const acc = Math.max(
      pick(chapter, "accuracy_score"),
      pick(scored, "accuracy_score"),
    );
    return {
      total,
      accuracy: acc,
      fluency: Math.max(pick(chapter, "fluency_score"), pick(scored, "fluency_score")),
      integrity: Math.max(pick(chapter, "integrity_score"), pick(scored, "integrity_score")),
      isRejected: scored?.getAttribute("is_rejected") === "true",
      // 单词级详情：content + 每词分数 + dp_message 错误标记
      words: Array.from(doc.querySelectorAll("word")).map((w) => ({
        word: w.getAttribute("content") ?? "",
        score: Number(w.getAttribute("total_score")) || 0,
        dpMessage: Number(w.getAttribute("dp_message")) || 0,
        // 0=正常；16=漏读；32=增读；64=回读；128=替换
        wrong: (Number(w.getAttribute("dp_message")) || 0) !== 0,
      })),
    };
  };

  const startRecording = useCallback(async () => {
    setError(null);
    setResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = chunks;

      setRecording(true);
      setRecordingSec(0);
      timerRef.current = window.setInterval(() => setRecordingSec((s) => s + 1), 1000);
    } catch (e) {
      setError("无法访问麦克风：" + ((e as Error).message || "请检查权限"));
    }
  }, []);

  const stopRecording = useCallback(async () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
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

    if (chunks.length === 0) {
      setError("未采集到音频");
      return;
    }

    // 合并录到的音频 blob（MediaRecorder 默认输出 webm/opus）
    const audioBlob = new Blob(chunks, { type: chunks[0].type || "audio/webm" });

    // 解码音频（AudioContext.decodeAudioData 支持 webm/opus）
    const audioCtx = new AudioContext();
    const arrayBuf = await audioBlob.arrayBuffer();
    const decoded = await audioCtx.decodeAudioData(arrayBuf);
    const srcSampleRate = decoded.sampleRate || 48000;
    const floatAudio = decoded.getChannelData(0);

    // 用 OfflineAudioContext 重采样到 16kHz
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

    await audioCtx.close();

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
        <div className="flex flex-col items-center gap-3">
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

          {/* 单词级详情：读错的词标红，正确的正常色 */}
          {Array.isArray((result as any).words) && (result as any).words.length > 0 && (
            <div className="flex max-w-xl flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-lg border border-border bg-muted/20 px-4 py-2">
              {(result as any).words.map((w: any, i: number) => (
                <span key={i} className="flex items-center gap-1">
                  <span
                    className={
                      w.wrong
                        ? "font-semibold text-rose-500"
                        : w.score >= 70
                          ? "text-emerald-500"
                          : "text-amber-500"
                    }
                  >
                    {w.word}
                  </span>
                  <span className="text-[10px] tabular-nums text-muted-foreground/60">
                    {Math.round(Number(w.score))}
                  </span>
                  {i < (result as any).words.length - 1 && (
                    <span className="text-muted-foreground/40">·</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 错误 */}
      {error && !evaluating && (
        <div className="text-sm text-rose-500">{error}</div>
      )}
    </div>
  );
}
