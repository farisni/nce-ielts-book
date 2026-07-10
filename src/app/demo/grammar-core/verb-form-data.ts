export interface GrammarExplanation {
  meaning: string;
  examples: string[];
  explanation: string;
  patterns?: string[];
}

export interface VerbFormValue {
  label: string;
  detail?: GrammarExplanation;
}

export interface VerbFormRow {
  tense: string;
  timing: string;
  transitiveActive: VerbFormValue;
  transitivePassive: VerbFormValue;
  intransitiveActive: VerbFormValue;
}

export interface VerbFormSection {
  id: "to-do" | "doing" | "done";
  title: string;
  subtitle?: string;
  tone: "green" | "blue" | "yellow";
  rows: VerbFormRow[];
}

const detail = (
  meaning: string,
  example: string | string[],
  explanation: string,
  patterns?: string[],
): GrammarExplanation => ({
  meaning,
  examples: Array.isArray(example) ? example : [example],
  explanation,
  patterns,
});

export const VERB_FORM_SECTIONS: VerbFormSection[] = [
  {
    id: "to-do",
    title: "to do",
    tone: "green",
    rows: [
      {
        tense: "一般",
        timing: "与谓语同时发生",
        transitiveActive: { label: "to do", detail: detail("动作与谓语同时或随后发生。", "I want to read this book.", "read 与 want 同时相关，并发生在 want 之后。") },
        transitivePassive: { label: "to be done", detail: detail("动作与谓语同时或随后发生，并表示被动。", "The work needs to be done today.", "work 是 do 的承受者。") },
        intransitiveActive: { label: "to do", detail: detail("不及物动作与谓语同时或随后发生。", "He seems to sleep well.", "sleep 不带宾语，与 seem 描述的状态同时。") },
      },
      {
        tense: "完成",
        timing: "在谓语之前发生",
        transitiveActive: { label: "to have done", detail: detail("动作发生在谓语之前。", "He seems to have lost his key.", "lose 发生在 seem 之前。") },
        transitivePassive: { label: "to have been done", detail: detail("被动动作发生在谓语之前。", "The task seems to have been completed.", "complete 先于 seem，task 是 complete 的承受者。") },
        intransitiveActive: { label: "to have done", detail: detail("不及物动作发生在谓语之前。", "She appears to have arrived early.", "arrive 发生在 appear 之前。") },
      },
      {
        tense: "进行",
        timing: "与谓语同时进行发生",
        transitiveActive: { label: "to be doing", detail: detail("动作在谓语发生时正在进行。", "He seems to be reading a book.", "read 与 seem 同时进行。") },
        transitivePassive: { label: "×" },
        intransitiveActive: { label: "to be doing", detail: detail("不及物动作在谓语发生时正在进行。", "She seems to be sleeping.", "sleep 与 seem 同时进行。") },
      },
    ],
  },
  {
    id: "doing",
    title: "doing",
    subtitle: "现在分词",
    tone: "blue",
    rows: [
      {
        tense: "一般",
        timing: "与谓语同时发生",
        transitiveActive: { label: "doing / being", detail: detail("主动动作或状态与谓语同时发生。", ["Doing: Seeing the teacher, he smiled.", "Being: Being tired, he went to bed early."], "see 与 smile 基本同时发生；being tired 表示与 went 同时存在的状态。", ["being + 形容词：being tired", "being + 名词：being a teacher", "being + 介词短语：being in trouble", "being + 过去分词：being watched（表示正在被……）"]) },
        transitivePassive: { label: "being done", detail: detail("被动动作与谓语同时发生。", "Being watched, he felt nervous.", "watch 与 feel 同时，he 是 watch 的承受者。") },
        intransitiveActive: { label: "doing / being", detail: detail("不及物动作或状态与谓语同时发生。", ["Doing: Walking home, she called me.", "Being: Being ill, she stayed at home."], "walk 与 call 同时发生；being ill 表示与 stayed 同时存在的状态。", ["being + 形容词：being ill", "being + 名词：being a student", "being + 介词短语：being at home", "being + 过去分词：being invited（表示正在被……）"]) },
      },
      {
        tense: "完成",
        timing: "在谓语之前发生",
        transitiveActive: { label: "having done", detail: detail("主动动作发生在谓语之前。", "Having finished the work, she left.", "finish 发生在 leave 之前。") },
        transitivePassive: { label: "having been done", detail: detail("被动动作发生在谓语之前。", "Having been warned, he became careful.", "warn 发生在 become 之前，he 是 warn 的承受者。") },
        intransitiveActive: { label: "having done", detail: detail("不及物动作发生在谓语之前。", "Having arrived early, she found a seat.", "arrive 发生在 find 之前。") },
      },
    ],
  },
  {
    id: "done",
    title: "done",
    subtitle: "过去分词",
    tone: "yellow",
    rows: [
      {
        tense: "—",
        timing: "无时间，只说明原因、条件、状态",
        transitiveActive: { label: "×" },
        transitivePassive: { label: "done → 表被动", detail: detail("表示被动的状态、原因或条件。", "Seen from above, the city looks beautiful.", "city 是 see 的承受者，seen 表被动。") },
        intransitiveActive: { label: "done → 表完成", detail: detail("少数不及物动词的过去分词表示完成。", "The guests arrived, tired but happy.", "arrived 表示到达已经完成。") },
      },
    ],
  },
];
