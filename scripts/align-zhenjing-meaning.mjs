/**
 * 把雅思词汇真经（zhenjing.ts）的词义对齐 ielts-all（ielts-vocabulary.ts）：
 * 匹配到的词（含 a/b 变体拆分）更新 meaning = ielts-all 的 chinese，未匹配的保持原样。
 * 用法：node scripts/align-zhenjing-meaning.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const zhenjingPath = "src/lib/speller/zhenjing.ts";
const vocabPath = "src/app/mock/ielts-vocabulary.ts";

const vocabSrc = readFileSync(vocabPath, "utf8");
const zhenjingSrc = readFileSync(zhenjingPath, "utf8");

// 1. 解析 ielts-all：word（含 a/b 变体拆分）→ chinese
const vocabMap = new Map();
const objRe = /"word":\s*"([^"]+)",\s*"partOfSpeech":\s*"([^"]*)",\s*"chinese":\s*"([^"]*)"/g;
let m;
let vocabCount = 0;
while ((m = objRe.exec(vocabSrc))) {
  const [, word, pos, chinese] = m;
  vocabCount++;
  for (const form of word.split("/")) {
    const key = form.trim().toLowerCase();
    if (key && !vocabMap.has(key)) {
      vocabMap.set(key, { chinese: (pos ? pos + " " : "") + chinese });
    }
  }
}
console.log("ielts-all 词条:", vocabCount, "拆分后词形:", vocabMap.size);

// 2. 逐行更新 zhenjing.ts 的 meaning
const lines = zhenjingSrc.split("\n");
let matched = 0;
let unmatched = 0;
const examples = [];
const wordRe = /word:\s*"([^"]+)"/;
const meaningRe = /(meaning:\s*")((?:[^"\\]|\\.)*)(")/;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const wm = line.match(wordRe);
  if (!wm) continue;
  const word = wm[1].toLowerCase();
  const mm = line.match(meaningRe);
  if (!mm) continue;
  const hit = vocabMap.get(word);
  if (hit) {
    const newMeaning = JSON.stringify(hit.chinese).slice(1, -1); // 与文件内转义风格一致
    lines[i] = line.replace(meaningRe, `$1${newMeaning}$3`);
    matched++;
    if (matched <= 3) examples.push({ word, old: mm[2], new: newMeaning });
  } else {
    unmatched++;
  }
}
console.log("匹配并更新:", matched, "未匹配保留:", unmatched);
console.log("示例:", JSON.stringify(examples, null, 1));

writeFileSync(zhenjingPath, lines.join("\n"));
console.log("已写入", zhenjingPath);
