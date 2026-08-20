/**
 * 全站声音音量（TopNav 滑块控制，localStorage 持久化）。
 * 通过 patch HTMLAudioElement.prototype.play 与 speechSynthesis.speak 统一生效，
 * 所有 new Audio() / TTS 播放点无需逐个接入。
 */

const KEY = "nce-global-volume";
const EVENT = "nce-volume-change";

let volume = 1;

function read(): number {
  if (typeof window === "undefined") return 1;
  try {
    const v = parseFloat(localStorage.getItem(KEY) ?? "");
    return Number.isFinite(v) ? Math.max(0, Math.min(1, v)) : 1;
  } catch {
    return 1;
  }
}

/** 当前全局音量（0-1） */
export function getGlobalVolume(): number {
  return volume;
}

/** 设置全局音量（0-1），持久化并广播（TopNav 滑块用） */
export function setGlobalVolume(v: number) {
  volume = Math.max(0, Math.min(1, v));
  try {
    localStorage.setItem(KEY, String(volume));
  } catch {}
  window.dispatchEvent(new CustomEvent(EVENT, { detail: volume }));
}

/** 订阅音量变化（返回取消函数） */
export function subscribeGlobalVolume(cb: (v: number) => void): () => void {
  window.addEventListener(EVENT, (e) => cb((e as CustomEvent<number>).detail));
  return () => window.removeEventListener(EVENT, cb as unknown as EventListener);
}

let installed = false;

/** 安装全局音量 patch（在模块首次使用时调用一次） */
export function installGlobalVolume() {
  if (installed || typeof window === "undefined") return;
  installed = true;
  volume = read();

  // 所有 new Audio() 播放前应用全局音量
  const origPlay = HTMLAudioElement.prototype.play;
  HTMLAudioElement.prototype.play = function () {
    this.volume = getGlobalVolume();
    return origPlay.call(this);
  };

  // speechSynthesis 朗读：音量 = utterance 原音量 × 全局音量
  const origSpeak = window.speechSynthesis.speak.bind(window.speechSynthesis);
  window.speechSynthesis.speak = ((u: SpeechSynthesisUtterance) => {
    u.volume = (u.volume || 1) * getGlobalVolume();
    return origSpeak(u);
  }) as typeof window.speechSynthesis.speak;
}
