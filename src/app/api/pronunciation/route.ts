import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { spawn } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

/**
 * 讯飞语音评测（流式版）后端转发
 * - 前端上传录音（16kHz PCM 或 wav） + 目标句子
 * - 后端连接讯飞 WebSocket v2/open-ise，返回发音评分
 *
 * 协议：两阶段
 *  1) cmd=ssb 传业务参数（data.status=0）
 *  2) cmd=auw 传音频（第一帧 aus=1 status=1，最后一帧 aus=4 status=2）
 *
 * 使用 Node 22 原生 WebSocket（避免 ws 库在 Next.js 打包下的 bufferUtil 冲突）
 * 密钥从环境变量读取（.env，已被 gitignore 排除）
 */

const XF_HOST = "ise-api.xfyun.cn";
const XF_PATH = "/v2/open-ise";
const XF_URL = `wss://${XF_HOST}${XF_PATH}`;

// 讯飞「其他语种评测」suntone（西/日/韩/法/德/俄），用于西语发音评测
const SUNTONE_HOST = "cn-east-1.ws-api.xf-yun.com";
const SUNTONE_PATH = "/v1/private/sffc17cdb";
const SUNTONE_URL = `wss://${SUNTONE_HOST}${SUNTONE_PATH}`;

/** 检测是否西语文本（含 ñ/¿/¡ 或常见西语词尾） */
function isSpanish(text: string): boolean {
  if (/[ñÑ¿¡áéíóúÁÉÍÓÚ]/.test(text)) return true;
  // 常见西语词
  return /\b(hola|buenos|buenas|adios|adiós|gracias|hasta|dias|días|noches|tardes|como|cómo|estas|estás|llamas|madrid|chino|mucho|nada|hoy|y|de|la|el)\b/i.test(text);
}

/**
 * m4a/aac/wav 等压缩/容器音频 → 16kHz 16bit 单声道 PCM
 *
 * 讯飞 ISE 只接受 16k/16bit/单声道 PCM；手机端录出的 m4a 直接上传会被判
 * 「乱读」。这里用系统 ffmpeg 转码（macOS 已验证 /opt/homebrew/bin/ffmpeg），
 * 输入容器由 ffmpeg 自动探测，输出 s16le 裸 PCM。
 * 成功/失败都会清理临时文件。
 */
function transcodeToPcm(input: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const inPath = join(tmpdir(), `ise-in-${randomUUID()}`);
    const outPath = join(tmpdir(), `ise-out-${randomUUID()}`);
    writeFileSync(inPath, input);
    const proc = spawn("ffmpeg", [
      "-y",
      "-loglevel", "error",
      "-i", inPath,
      "-ar", "16000",
      "-ac", "1",
      "-sample_fmt", "s16",
      "-f", "s16le",
      outPath,
    ]);
    proc.on("error", (err) => {
      try { unlinkSync(inPath); unlinkSync(outPath); } catch { /* 忽略清理失败 */ }
      reject(err);
    });
    proc.on("close", (code) => {
      try { unlinkSync(inPath); } catch { /* 忽略 */ }
      if (code !== 0) {
        try { unlinkSync(outPath); } catch { /* 忽略 */ }
        reject(new Error(`ffmpeg 转码失败（退出码 ${code}），请确认音频文件有效`));
        return;
      }
      try {
        const pcm = readFileSync(outPath);
        unlinkSync(outPath);
        resolve(pcm);
      } catch (err) {
        try { unlinkSync(outPath); } catch { /* 忽略 */ }
        reject(err as Error);
      }
    });
  });
}

function getCredentials(): { appId: string; apiKey: string; apiSecret: string } {
  const appId = process.env.XF_APP_ID;
  const apiKey = process.env.XF_API_KEY;
  const apiSecret = process.env.XF_API_SECRET;
  if (!appId || !apiKey || !apiSecret) {
    throw new Error("缺少讯飞密钥，请在 .env 配置 XF_APP_ID / XF_API_KEY / XF_API_SECRET");
  }
  return { appId, apiKey, apiSecret };
}

/** 生成带鉴权参数的 WebSocket URL（hmac-sha256 签名） */
function buildAuthUrl(): string {
  const { apiKey, apiSecret } = getCredentials();
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${XF_HOST}\ndate: ${date}\nGET ${XF_PATH} HTTP/1.1`;
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(signatureOrigin)
    .digest("base64");
  const authorizationOrigin = `api_key="${apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = Buffer.from(authorizationOrigin, "utf8").toString("base64");
  return `${XF_URL}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(XF_HOST)}`;
}

/** 与讯飞 WebSocket 交互，返回评测 XML 字符串（流式版只支持 xml） */
function evaluateAudio(
  audioBuffer: Buffer,
  targetText: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const { appId } = getCredentials();
    const ws = new WebSocket(buildAuthUrl());

    let result = "";
    let settled = false;

    const done = (err?: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { ws.close(); } catch { /* ignore */ }
      if (err) reject(err);
    };

    const timer = setTimeout(() => done(new Error("评测超时")), 20000);

    ws.addEventListener("open", () => {
      // 阶段 1：传业务参数（带 UTF-8 BOM 头）
      // 英文 read_sentence 需要 [content] 标记 + 换行分隔；中文句子用纯文本
      // 注意：text 是明文字符串（含 BOM），不 base64（官方 demo 如此）
      const isChinese = /[一-鿿]/.test(targetText);
      const examText = isChinese ? targetText : `[content]\n${targetText}\n`;
      const business = {
        sub: "ise",
        ent: isChinese ? "cn_vip" : "en_vip",
        category: "read_sentence",
        cmd: "ssb",
        auf: "audio/L16;rate=16000",
        aue: "raw",
        tte: "utf-8",
        text: `﻿${examText}`,
        ttp_skip: true,
      };
      ws.send(JSON.stringify({ common: { app_id: appId }, business, data: { status: 0 } }));

      // 阶段 2：分帧上传音频（auw 帧不带 common，business 仅需 aus/cmd/aue）
      // 官方 demo：每帧 1280B，间隔 40ms
      const frameSize = 1280;
      const totalBytes = audioBuffer.length;

      const sendAuwFrame = (aus: number, status: number, data: string) => {
        ws.send(
          JSON.stringify({
            business: { aus, cmd: "auw", aue: "raw" },
            data: { status, data },
          }),
        );
      };

      if (totalBytes <= frameSize) {
        // 单帧：第一帧也是最后一帧
        sendAuwFrame(1, 2, audioBuffer.toString("base64"));
      } else {
        const n = Math.ceil(totalBytes / frameSize);
        for (let i = 0; i < n; i++) {
          const start = i * frameSize;
          const end = Math.min(totalBytes, start + frameSize);
          const b64 = audioBuffer.subarray(start, end).toString("base64");
          const isFirst = i === 0;
          const isLast = i === n - 1;
          sendAuwFrame(isFirst ? 1 : isLast ? 4 : 2, isLast ? 2 : 1, b64);
        }
      }
    });

    ws.addEventListener("message", (event) => {
      let msg: Record<string, any>;
      try {
        msg = JSON.parse(event.data as string);
      } catch {
        return;
      }
      if (msg.code !== 0) {
        done(new Error(`讯飞错误 ${msg.code}: ${msg.message}`));
        return;
      }
      if (msg.data?.status === 2 && msg.data?.data) {
        const payload = Buffer.from(msg.data.data, "base64").toString("utf8");
        result = payload;
        done();
      }
    });

    ws.addEventListener("error", () => done(new Error("讯飞 WebSocket 连接失败")));
    ws.addEventListener("close", () => {
      if (!settled) done(new Error("连接被关闭"));
    });

    // 等待 done 后 resolve（返回原始 XML 字符串）
    const check = setInterval(() => {
      if (settled) {
        clearInterval(check);
        if (result) resolve(result);
        else reject(new Error("讯飞未返回评测结果"));
      }
    }, 50);
  });
}

/** 生成 suntone 带鉴权参数的 WebSocket URL */
function buildSuntoneUrl(): string {
  const { apiKey, apiSecret } = getCredentials();
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${SUNTONE_HOST}\ndate: ${date}\nGET ${SUNTONE_PATH} HTTP/1.1`;
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(signatureOrigin)
    .digest("base64");
  const authorizationOrigin = `api_key="${apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = Buffer.from(authorizationOrigin, "utf8").toString("base64");
  return `${SUNTONE_URL}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(SUNTONE_HOST)}`;
}

/** 与讯飞 suntone（其他语种）交互，返回评测 JSON 字符串（西语） */
function evaluateSuntone(
  audioBuffer: Buffer,
  targetText: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const { appId } = getCredentials();
    const ws = new WebSocket(buildSuntoneUrl());

    let result = "";
    let settled = false;

    const done = (err?: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { ws.close(); } catch { /* ignore */ }
      if (err) reject(err);
    };

    const timer = setTimeout(() => done(new Error("评测超时")), 20000);

    ws.addEventListener("open", () => {
      const st = {
        lang: "sp",
        core: "sent",
        refText: targetText,
        result: { encoding: "utf8", compress: "raw", format: "json" },
      };
      // 帧1：参数 + 全部音频（raw PCM）
      const audioB64 = audioBuffer.toString("base64");
      ws.send(JSON.stringify({
        header: { app_id: appId, status: 0 },
        parameter: { st },
        payload: { data: { encoding: "raw", sample_rate: 16000, channels: 1, bit_depth: 16, status: 0, seq: 0, audio: audioB64, frame_size: 0 } },
      }));
      // 帧2：结束帧（带占位音频）
      setTimeout(() => {
        ws.send(JSON.stringify({
          header: { app_id: appId, status: 2 },
          parameter: { st },
          payload: { data: { encoding: "raw", sample_rate: 16000, channels: 1, bit_depth: 16, status: 2, seq: 1, audio: "AAAA", frame_size: 0 } },
        }));
      }, 300);
    });

    ws.addEventListener("message", (event) => {
      let msg: Record<string, any>;
      try {
        msg = JSON.parse(event.data as string);
      } catch {
        return;
      }
      if (msg.header?.code !== 0) {
        done(new Error(`讯飞错误 ${msg.header.code}: ${msg.header.message}`));
        return;
      }
      if (msg.header?.status === 2 && msg.payload?.result) {
        result = Buffer.from(msg.payload.result.text || "", "base64").toString("utf8");
        done();
      }
    });

    ws.addEventListener("error", () => done(new Error("讯飞 WebSocket 连接失败")));
    ws.addEventListener("close", () => {
      if (!settled) done(new Error("连接被关闭"));
    });

    const check = setInterval(() => {
      if (settled) {
        clearInterval(check);
        if (result) resolve(result);
        else reject(new Error("讯飞未返回评测结果"));
      }
    }, 50);
  });
}

/** 解析 suntone 西语评测 JSON，提取总分 + 各维度分 + 单词级分数 */
function parseSuntoneResult(jsonText: string) {
  try {
    const data = JSON.parse(jsonText);
    const r = data.result ?? {};
    const overall = Number(r.overall) || 0;
    // 语速（speed 是每分钟音节数，越接近自然语速越好；仅作参考不归一）
    const speed = Number(r.speed) || 0;
    const words = Array.isArray(r.words)
      ? r.words.map((w: any) => ({
          word: String(w.word ?? "").replace(/[,\s]+$/, ""),
          // 单词总分
          score: Number(w.scores?.overall) || 0,
          // 发音准确度（讯飞西语单词级维度）
          pronunciation: Number(w.scores?.pronunciation) || 0,
          wrong: (Number(w.scores?.overall) || 0) < 60,
        }))
      : [];
    // 准确度 = 各单词发音准确度的平均值
    const pronAvg = words.length
      ? Math.round(words.reduce((s: number, w: { pronunciation: number }) => s + (w.pronunciation || 0), 0) / words.length)
      : overall;
    return {
      total: overall,
      accuracy: pronAvg,
      fluency: overall,
      integrity: overall,
      speed,
      isRejected: false,
      exceptInfo: "0",
      exceptMessage: "",
      words,
    };
  } catch {
    return { total: 0, accuracy: 0, fluency: 0, integrity: 0, speed: 0, isRejected: true, exceptInfo: "-1", exceptMessage: "评测结果解析失败", words: [] };
  }
}

/** 讯飞英文评测分数为 0-5 分制，归一化为 0-100 便于展示 */
function normalizeScore(v: number): number {
  if (v <= 0) return 0;
  // 0-5 分制 → ×20；0-10 分制 → ×10；其余（0-100）原样
  if (v <= 5.5) return Math.min(100, v * 20);
  if (v <= 10.5) return Math.min(100, v * 10);
  return Math.min(100, v);
}

/** 讯飞 except_info 拒绝原因（枚举值 → 中文描述），来自官方文档 */
function describeExceptInfo(code: number): string {
  const map: Record<number, string> = {
    0x7001: "未检测到有效语音或音量过小，请靠近麦克风大声朗读",
    0x7004: "被判定为乱读，请按句子原文清晰朗读",
    0x7008: "环境信噪比过低，请到安静环境朗读",
    0x7012: "音频截幅（音量过大爆音），请调低音量",
    0x7011: "没有检测到音频输入，请检查麦克风是否可用",
  };
  return map[code] ?? (code > 0 ? `引擎拒绝评测（异常码 ${code}）` : "");
}

/**
 * 用正则解析讯飞返回的 XML 评测结果，提取结构化分数（Node 无 DOMParser）
 * 结构可能是 read_chapter / read_sentence / sentence 任一存在，取所有命中节点的最大值
 */
function parseIseXml(xmlText: string) {
  const NODES = ["read_chapter", "read_sentence", "sentence"];

  const collect = (name: string): number => {
    const vals: number[] = [];
    for (const tag of NODES) {
      const re = new RegExp(`<${tag}\\b[^>]*\\b${name}="([^"]+)"`, "g");
      let m: RegExpExecArray | null;
      while ((m = re.exec(xmlText)) !== null) {
        const v = Number(m[1]);
        if (Number.isFinite(v)) vals.push(v);
      }
    }
    return vals.length ? Math.max(...vals) : 0;
  };
  const collectBool = (name: string): boolean => {
    for (const tag of NODES) {
      const re = new RegExp(`<${tag}\\b[^>]*\\b${name}="([^"]+)"`);
      const m = re.exec(xmlText);
      if (m) return m[1] === "true";
    }
    return false;
  };
  const collectStr = (name: string): string => {
    for (const tag of NODES) {
      const re = new RegExp(`<${tag}\\b[^>]*\\b${name}="([^"]*)"`);
      const m = re.exec(xmlText);
      if (m) return m[1];
    }
    return "";
  };

  // 单词级：遍历所有 <word ...> 标签
  const words: { word: string; score: number; wrong: boolean }[] = [];
  const wordRe = /<word\b[^>]*>/g;
  let wm: RegExpExecArray | null;
  while ((wm = wordRe.exec(xmlText)) !== null) {
    const tag = wm[0];
    const w = /content="([^"]*)"/.exec(tag)?.[1] ?? "";
    const sc = Number(/total_score="([^"]*)"/.exec(tag)?.[1] ?? 0);
    const dp = Number(/dp_message="([^"]*)"/.exec(tag)?.[1] ?? 0);
    if (w && w !== "sil" && w !== "silv" && w !== "fil") {
      words.push({ word: w, score: sc, wrong: dp !== 0 });
    }
  }

  const exceptCode = Number(collectStr("except_info")) || 0;
  return {
    total: normalizeScore(collect("total_score")),
    accuracy: normalizeScore(collect("accuracy_score") || collect("standard_score")),
    fluency: normalizeScore(collect("fluency_score")),
    integrity: normalizeScore(collect("integrity_score")),
    isRejected: collectBool("is_rejected"),
    exceptInfo: exceptCode,
    exceptMessage: describeExceptInfo(exceptCode),
    words: words.map((w) => ({ ...w, score: normalizeScore(w.score) })),
  };
}

export async function POST(request: NextRequest) {
  let audio: Buffer;
  let text: string;
  let audioContentType = "";
  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio");
    const textVal = formData.get("text");
    if (!(audioFile instanceof Blob)) {
      return NextResponse.json({ error: "缺少音频文件" }, { status: 400 });
    }
    if (typeof textVal !== "string" || !textVal.trim()) {
      return NextResponse.json({ error: "缺少目标句子" }, { status: 400 });
    }
    const arrayBuf = await audioFile.arrayBuffer();
    audio = Buffer.from(arrayBuf);
    text = textVal.trim();
    audioContentType = audioFile.type ?? "";
  } catch {
    return NextResponse.json({ error: "请求体解析失败，需使用 multipart/form-data" }, { status: 400 });
  }

  if (audio.length === 0) {
    return NextResponse.json({ error: "音频为空" }, { status: 400 });
  }

  try {
    // 非裸 PCM（如手机录的 m4a/aac）：先 ffmpeg 转成 16k/16bit/单声道 PCM，
    // 再喂讯飞。参考项目 Web 端上传的是裸 PCM（audio/pcm），跳过转码。
    if (audioContentType && audioContentType !== "audio/pcm" && audioContentType !== "audio/x-pcm") {
      audio = await transcodeToPcm(audio);
    }
    // 西语文本 → suntone（其他语种评测），否则走中英文 ISE
    if (isSpanish(text)) {
      const resultJson = await evaluateSuntone(audio, text);
      const parsed = parseSuntoneResult(resultJson);
      if (parsed.isRejected || parsed.total === 0) {
        console.warn(`[suntone] text=${JSON.stringify(text)} audio=${audio.length}B`);
      }
      return NextResponse.json({ success: true, result: parsed, engine: "suntone" });
    }
    const resultXml = await evaluateAudio(audio, text);
    const parsed = parseIseXml(resultXml);
    // 诊断日志：被拒或得分为 0 时打印原始 XML，便于排查录音问题
    if (parsed.isRejected || parsed.total === 0) {
      console.warn(`[ise] text=${JSON.stringify(text)} audio=${audio.length}B exceptInfo=${parsed.exceptInfo}`);
      console.warn(`[ise] xml=${resultXml.slice(0, 800)}`);
    }
    return NextResponse.json({ success: true, result: parsed });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: (e as Error).message },
      { status: 502 },
    );
  }
}
