import { NextRequest, NextResponse } from "next/server";
import WebSocket from "ws";
import crypto from "crypto";

/**
 * 讯飞语音评测（流式版）后端转发
 * - 前端上传录音（16kHz PCM 或 wav） + 目标句子
 * - 后端连接讯飞 WebSocket v2/open-ise，返回发音评分
 *
 * 协议：两阶段
 *  1) cmd=ssb 传业务参数（data.status=0）
 *  2) cmd=auw 传音频（第一帧 aus=1 status=1，最后一帧 aus=4 status=2）
 *
 * 密钥从环境变量读取（.env，已被 gitignore 排除）
 */

const XF_HOST = "ise-api.xfyun.cn";
const XF_PATH = "/v2/open-ise";
const XF_URL = `wss://${XF_HOST}${XF_PATH}`;

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

/** 与讯飞 WebSocket 交互，返回评测 JSON */
function evaluateAudio(
  audioBuffer: Buffer,
  targetText: string,
): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    const { appId } = getCredentials();
    const ws = new WebSocket(buildAuthUrl(), { perMessageDeflate: false });

    let result = "";
    let settled = false;
    const done = (err?: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      ws.close();
      if (err) reject(err);
    };

    const timer = setTimeout(() => done(new Error("评测超时")), 20000);

    ws.on("open", () => {
      // 阶段 1：传业务参数
      const business = {
        sub: "ise",
        ent: "en_vip",
        category: "read_sentence",
        cmd: "ssb",
        auf: "audio/L16;rate=16000",
        aue: "raw",
        tte: "utf-8",
        text: Buffer.from(targetText, "utf8").toString("base64"),
        plev: "5",
        rst: "plain",
        ise_unite: "1",
      };
      ws.send(
        JSON.stringify({
          common: { app_id: appId },
          business,
          data: { status: 0 },
        }),
      );

      // 阶段 2：传音频（单帧发送，status=2 结束）
      ws.send(
        JSON.stringify({
          common: { app_id: appId },
          business: { sub: "ise", ent: "en_vip", cmd: "auw", auf: "audio/L16;rate=16000", aue: "raw" },
          data: {
            status: 2,
            data: audioBuffer.toString("base64"),
          },
        }),
      );
    });

    ws.on("message", (data: WebSocket.RawData) => {
      const msg = JSON.parse(data.toString());
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

    ws.on("error", (err) => done(err));
    ws.on("close", () => {
      if (!settled) done(new Error("连接被关闭"));
    });

    // 等待 done 后 resolve
    const check = setInterval(() => {
      if (settled) {
        clearInterval(check);
        if (result) {
          try {
            resolve(JSON.parse(result));
          } catch (e) {
            reject(new Error(`解析评测结果失败: ${(e as Error).message}`));
          }
        }
      }
    }, 50);
  });
}

export async function POST(request: NextRequest) {
  let audio: Buffer;
  let text: string;
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
  } catch {
    return NextResponse.json({ error: "请求体解析失败，需使用 multipart/form-data" }, { status: 400 });
  }

  if (audio.length === 0) {
    return NextResponse.json({ error: "音频为空" }, { status: 400 });
  }

  try {
    const result = await evaluateAudio(audio, text);
    return NextResponse.json({ success: true, result });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: (e as Error).message },
      { status: 502 },
    );
  }
}
