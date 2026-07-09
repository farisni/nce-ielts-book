"use client";

import React, { useState } from "react";
import { MoreHorizontal, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/reui/badge";
import { Tooltip } from "@/components/ui/tooltip";
import { WheelPicker } from "@/components/motion/wheel-picker";

const SENTENCE_COMPONENTS = [
  { component: "主语 (S)", roleKey: "主语", forms: ["名词", "代词", "不定式", "名词性从句"] },
  { component: "谓语 (V)", roleKey: "谓语", forms: ["动词", "动词短语"] },
  { component: "宾语 (直接宾语)", roleKey: "宾语", forms: ["名词", "代词", "不定式", "名词性从句"] },
  { component: "表语 (C)", roleKey: "表语", forms: ["名词", "形容词", "介词短语", "分词", "不定式", "从句"] },
  { component: "间接宾语 (IO)", roleKey: "间接宾语", forms: ["名词", "代词"] },
  { component: "宾语补足语 (OC)", roleKey: "宾语补足语", forms: ["名词", "形容词", "不定式", "分词", "介词短语"] },
  { component: "定语 (Attr)", roleKey: "定语", forms: ["形容词", "不定式", "介词短语", "从句"] },
  { component: "状语 (Adv)", roleKey: "状语", forms: ["副词", "介词短语", "不定式", "从句"] },
];

const FORM_COMPONENTS = [
  { form: "名词", roles: ["主语", "宾语", "间接宾语", "表语", "宾语补足语", "同位语"] },
  { form: "代词", roles: ["主语", "宾语", "间接宾语", "表语"] },
  { form: "形容词", roles: ["表语", "宾语补足语", "定语"] },
  { form: "副词", roles: ["状语"] },
  { form: "介词短语", roles: ["状语", "表语", "定语", "宾语补足语"] },
  { form: "不定式", roles: ["主语", "宾语", "表语", "定语", "状语", "宾语补足语"] },
  { form: "分词", roles: ["定语", "表语", "状语", "宾语补足语"] },
  { form: "从句", roles: ["主语", "宾语", "表语", "定语", "状语", "同位语"] },
];

const ROLE_COLOR: Record<string, string> = {
  "主语": "border-emerald-300 text-emerald-700",
  "谓语": "border-blue-300 text-blue-700",
  "宾语": "border-blue-300 text-blue-700",
  "间接宾语": "border-sky-300 text-sky-700",
  "表语": "border-orange-300 text-orange-700",
  "宾语补足语": "border-[#C7D2CD] text-[#5a6b63]",
  "定语": "border-yellow-300 text-yellow-700",
  "状语": "border-pink-300 text-pink-700",
  "同位语": "border-stone-300 text-stone-700",
};

const ROLE_UNDERLINE: Record<string, string> = {
  "主语": "decoration-emerald-400",
  "谓语": "decoration-[#c2410c]",
  "宾语": "decoration-blue-400",
  "间接宾语": "decoration-sky-400",
  "表语": "decoration-orange-400",
  "宾语补足语": "decoration-[#C7D2CD]",
  "定语": "decoration-yellow-400",
  "状语": "decoration-pink-400",
  "同位语": "decoration-stone-400",
};

const FORM_COLOR: Record<string, string> = {
  "名词": "border-emerald-300 bg-emerald-50 text-emerald-700",
  "代词": "border-emerald-200 bg-emerald-50/60 text-emerald-600",
  "形容词": "border-yellow-300 bg-yellow-50 text-yellow-700",
  "副词": "border-rose-300 bg-rose-50 text-rose-700",
  "介词短语": "border-violet-300 bg-violet-50 text-violet-700",
  "不定式": "border-purple-300 bg-purple-50 text-purple-700",
  "分词": "border-lime-300 bg-lime-50 text-lime-700",
  "动词": "border-[#c4623d] bg-[#c4623d]/15 text-[#c4623d]",
  "动词短语": "border-[#c4623d] bg-[#c4623d]/15 text-[#c4623d]",
  "动名词": "border-cyan-300 bg-cyan-50 text-cyan-700",
  "名词性从句": "border-stone-300 bg-stone-50 text-stone-600",
  "定语从句": "border-amber-300 bg-amber-50 text-amber-700",
  "状语从句": "border-rose-300 bg-rose-50 text-rose-600",
};

const FORM_UNDERLINE: Record<string, string> = {
  "名词": "decoration-emerald-400",
  "代词": "decoration-emerald-300",
  "形容词": "decoration-yellow-400",
  "副词": "decoration-rose-400",
  "介词短语": "decoration-violet-400",
  "不定式": "decoration-purple-400",
  "分词": "decoration-lime-400",
  "动词": "decoration-[#c4623d]",
  "动词短语": "decoration-[#c4623d]",
  "从句": "decoration-neutral-400",
};


const MATRIX_FORMS = ["主语","宾语","间接宾语","宾语补足语","表语","定语","状语","同位语","谓语"];

const MATRIX_ROWS: [string, string[]][] = [
  ["名词", ["主语","宾语","间接宾语","表语","宾语补足语","同位语"]],
  ["代词", ["主语","宾语","间接宾语","表语"]],
  ["形容词", ["表语","宾语补足语","定语"]],
  ["副词", ["状语"]],
  ["介词短语", ["状语","表语","定语","宾语补足语"]],
  ["不定式", ["主语","宾语","表语","定语","状语","宾语补足语"]],
  ["分词", ["定语","表语","状语","宾语补足语"]],
  ["从句", ["主语","宾语","宾语补足语","表语","定语","状语","同位语"]],
  ["动词", ["谓语"]],
  ["动词短语", ["谓语"]],
];

const TEXT_HIGHLIGHT: Record<string, string> = {
  "介词短语": "bg-gradient-to-t from-violet-300/50 from-50% to-transparent to-50%",
  "不定式": "bg-gradient-to-t from-purple-300/50 from-50% to-transparent to-50%",
  "状语": "bg-gradient-to-t from-pink-300/50 from-50% to-transparent to-50%",
  "表语": "bg-gradient-to-t from-orange-300/50 from-50% to-transparent to-50%",
};

const EXAMPLE_SENTENCES: Record<string, string> = {
  // 主语
  "名词::主语": "The dog barks. 狗在叫。",
  "代词::主语": "I love you. 我爱你。",
  "不定式::主语": "To err is human. 犯错乃人之常情。",
  "从句::主语": "What you said is true. 你说的是真的。",
  // 谓语
  "动词::谓语": "She runs fast. 她跑得很快。",
  "动词短语::谓语": "She is looking after the baby. 她在照看宝宝。",
  // 宾语
  "分词::宾语": "She loves dancing in the rain. 她喜欢在雨中跳舞。",
  "名词::宾语": "He reads books. 他读书。",
  "代词::宾语": "He saw her. 他看见了她。",
  "不定式::宾语": "She wants to go. 她想去。",
  "从句::宾语": "I know what you mean. 我懂你的意思。",
  // 间接宾语
  "名词::间接宾语": "He gave Mary a gift. 他给了Mary一份礼物。",
  "代词::间接宾语": "He gave her a gift. 他给了她一份礼物。",
  "名词::表语": "He is a teacher. 他是一名老师。",
  "代词::表语": "The winner is him. 赢家是他。",  "形容词::表语": "She is happy. 她很开心。",
  "分词::表语": "He is excited. 他很兴奋。",
  "不定式::表语": "My goal is to succeed. 我的目标是成功。",
  "介词短语::表语": "She is in the room. 她在房间里。",
  "从句::表语": "The truth is that he lied. 事实是他撒谎了。",
  // 宾语补足语
  "名词::宾语补足语": "They elected John president. 他们选John当总统。",
  "形容词::宾语补足语": "They painted the wall white. 他们把墙刷白了。",
  "不定式::宾语补足语": "I want you to go. 我要你走。",
  "分词::宾语补足语": "I saw him running. 我看见他在跑。",
  "从句::宾语补足语": "They made the city what it is today. 他们使这座城市成为今天的样子。",
  "分词::状语": "Walking slowly, he went home. 他慢慢地走回家。",  "介词短语::宾语补足语": "She put the book on the table. 她把书放在桌上。",
  // 定语
  "形容词::定语": "a beautiful flower 一朵美丽的花",
  "不定式::定语": "a book to read 一本要读的书",
  "介词短语::定语": "the girl in red 穿红裙的女孩",
  "从句::定语": "the man who came yesterday 昨天来的那个人",
  // 状语
  "副词::状语": "He runs quickly. 他跑得很快。",
  "介词短语::状语": "She arrived in the morning. 她早上到的。",
  "不定式::状语": "He went to buy milk. 他去买牛奶了。",
  "从句::状语": "When it rains, I stay home. 下雨我就待在家。",
  // 同位语
  "名词::同位语": "Beijing, the capital of China 北京，中国的首都",
  "从句::同位语": "The idea that he proposed is great. 他提的建议很棒。",
};

function getTextColor(form: string): string {
  const val = FORM_COLOR[form];
  if (!val) return "";
  const m = val.match(/text-\S+/);
  return m ? m[0] : "";
}

function getExample(form: string, role: string): string | null {
  return EXAMPLE_SENTENCES[`${form}::${role}`] ?? null;
}

function renderExpandedExample(example: string | null | undefined, englishClassName = "text-sm") {
  if (!example) return null;

  const chineseStart = example.search(/[\u3400-\u9fff]/);
  if (chineseStart === -1) {
    return <span className={`${englishClassName} text-foreground/75`}>{example}</span>;
  }

  const english = example.slice(0, chineseStart).trimEnd();
  const chinese = example.slice(chineseStart).trimStart();

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
      <span className={`${englishClassName} text-foreground/75`}>{english}</span>
      <span>{chinese}</span>
    </span>
  );
}

export default function GrammarCorePage() {
  const FORM_ALIAS: Record<string, string> = {
    "名词性从句": "从句",
  };

  function resolveForm(f: string): string {
    return FORM_ALIAS[f] ?? f;
  }

  const [hoveredForm, setHoveredForm] = useState<string | null>(null);
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [expandedLeft, setExpandedLeft] = useState<string | null>(null);
  const [expandedRight, setExpandedRight] = useState<string | null>(null);
  const [hoveredMatrix, setHoveredMatrix] = useState<{row: number; col: number} | null>(null);
  const [expandedMatrix, setExpandedMatrix] = useState<Set<string>>(new Set());
  const [selectedMatrixForm, setSelectedMatrixForm] = useState<string | null>(null);
  const [selectedMatrixRole, setSelectedMatrixRole] = useState<string | null>(null);
  const selectedMatrixForms = selectedMatrixRole
    ? MATRIX_ROWS.filter(([, roles]) => roles.includes(selectedMatrixRole)).map(([form]) => form)
    : MATRIX_ROWS.map(([form]) => form);
  const selectedMatrixRoles = selectedMatrixForm
    ? MATRIX_ROWS.find(([form]) => form === selectedMatrixForm)?.[1] ?? []
    : MATRIX_FORMS;
  const selectedMatrix = selectedMatrixForm && selectedMatrixRole
    ? {
        row: MATRIX_ROWS.findIndex(([form]) => form === selectedMatrixForm),
        col: MATRIX_FORMS.findIndex((role) => role === selectedMatrixRole),
      }
    : null;
  const activeMatrix = hoveredMatrix ?? (selectedMatrix?.row !== -1 && selectedMatrix?.col !== -1 ? selectedMatrix : null);

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-dashed border-border p-4">

        {/* 句子成分 × 结构形式 矩阵 */}
        <h3 className="text-sm font-medium text-muted-foreground mb-3 mt-6">句子成分 × 结构形式 矩阵</h3>
        <div className="mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-dashed border-border bg-muted/20 p-3">
          <div className="inline-flex items-center justify-center gap-1">
            <WheelPicker
              aria-label="选择结构形式"
              className="w-24 border-0 !bg-transparent"
              visibleCount={7}
              itemHeight={42}
              options={[
                { label: "结构形式", value: "" },
                ...selectedMatrixForms,
              ]}
              renderSelectedOption={(label, value) => value ? (
                <Badge variant="outline" className={`text-sm ${FORM_COLOR[value] ?? ""}`}>
                  {label}
                </Badge>
              ) : label}
              value={selectedMatrixForm ?? ""}
              onValueChange={(value) => {
                if (!value) {
                  setSelectedMatrixForm(null);
                  return;
                }
                const roles = MATRIX_ROWS.find(([form]) => form === value)?.[1] ?? [];
                setSelectedMatrixForm(value);
                setSelectedMatrixRole((current) => current && roles.includes(current) ? current : roles[0] ?? null);
              }}
            />
            <WheelPicker
              aria-label="选择句子成分"
              className="w-28 border-0 !bg-transparent"
              visibleCount={7}
              itemHeight={42}
              options={[
                { label: "句子成分", value: "" },
                ...selectedMatrixRoles,
              ]}
              renderSelectedOption={(label, value) => value ? (
                <span className={`underline underline-offset-4 decoration-2 ${ROLE_UNDERLINE[value] ?? ""}`}>
                  {label}
                </span>
              ) : label}
              value={selectedMatrixRole ?? ""}
              onValueChange={(value) => {
                if (!value) {
                  setSelectedMatrixRole(null);
                  return;
                }
                const forms = MATRIX_ROWS.filter(([, roles]) => roles.includes(value)).map(([form]) => form);
                setSelectedMatrixRole(value);
                setSelectedMatrixForm((current) => current && forms.includes(current) ? current : forms[0] ?? null);
              }}
            />
          </div>
          <Button
            className="self-center"
            type="button"
            variant="outline"
            size="sm"
            disabled={!selectedMatrixForm && !selectedMatrixRole}
            onClick={() => {
              setSelectedMatrixForm(null);
              setSelectedMatrixRole(null);
            }}
          >
            <X data-icon="inline-start" />
            清除
          </Button>
        </div>
        <div className="mt-4 overflow-x-auto scrollbar-ghost">
          <div className="inline-block min-w-full">
            <div className="grid rounded-md"
                 style={{ gridTemplateColumns: '5rem repeat(9, 1fr) 2rem' }}>
              <div className="p-2 text-xs font-medium text-muted-foreground border-b border-dashed border-border"></div>
              {(() => {
                const expandedColumns = new Set(MATRIX_ROWS.filter(([r]) => expandedMatrix.has(r)).flatMap(([, forms]) => forms));
                const anyExpanded = expandedMatrix.size > 0;
                const hoveredRowForms = activeMatrix?.col === -1 ? MATRIX_ROWS[activeMatrix.row]?.[1] : null;
                return MATRIX_FORMS.map((f, ci) => {
                const tipMap: Record<string, string> = { "表语": "表语 → 说明主语", "宾语补足语": "宾语补足语 → 说明宾语", "间接宾语": "间接宾语由名词性承担", "同位语": "同位语具有名词性" };
                const tooltipText = tipMap[f];
                const header = (
                  <div
                    className={`p-2 text-xs font-bold text-center border-b border-dashed border-border transition-[opacity,filter] ${tooltipText ? "cursor-pointer" : "cursor-default"} ${ROLE_COLOR[f] ?? ''} ${((activeMatrix && activeMatrix.col !== ci && !hoveredRowForms?.includes(f)) || (anyExpanded && !expandedColumns.has(f))) ? 'opacity-30 grayscale' : ''}`}
                    onMouseEnter={() => setHoveredMatrix({ row: -1, col: ci })}
                    onMouseLeave={() => setHoveredMatrix(null)}
                  >
                    {f}
                  </div>
                );
                if (tooltipText) return <Tooltip key={f} content={<span className="text-xs">{tooltipText}</span>}>{header}</Tooltip>;
                return <React.Fragment key={f}>{header}</React.Fragment>;
              })})()}
              <div className="border-b border-dashed border-border"></div>
              {MATRIX_ROWS.map(([role, forms], ri) => {
                  const matrixExamples = forms
                    .map(f => ({ form: f, example: getExample(role, f) }))
                    .filter(e => e.example);
                  const anyMatrixExpanded = expandedMatrix.size > 0;
                  const isMatrixExpanded = expandedMatrix.has(role);
                  const matrixRowDimmed = anyMatrixExpanded && !isMatrixExpanded;
                  const hoveredColumn = activeMatrix?.row === -1 ? MATRIX_FORMS[activeMatrix.col] : null;
                  const rowHasHoveredColumn = hoveredColumn ? forms.includes(hoveredColumn) : false;
                  return (
                <React.Fragment key={role}>
                  <div
                    className={`p-2 text-xs font-medium border-b border-dashed border-border transition-[opacity,filter] underline underline-offset-4 decoration-2 ${FORM_UNDERLINE[role] ?? ''} ${((activeMatrix && activeMatrix.row !== ri && !rowHasHoveredColumn) || matrixRowDimmed) ? 'opacity-30 grayscale' : ''}`}
                    onMouseEnter={() => setHoveredMatrix({ row: ri, col: -1 })}
                    onMouseLeave={() => setHoveredMatrix(null)}
                  >{role}</div>
                  {MATRIX_FORMS.map((f, ci) => {
                    const hasMatch = forms.includes(f);
                    const example = hasMatch ? getExample(role, f) : null;
                    const exactMatrixFocus = activeMatrix && activeMatrix.row >= 0 && activeMatrix.col >= 0;
                    const cellDimmed = exactMatrixFocus
                      ? activeMatrix.row !== ri || activeMatrix.col !== ci || matrixRowDimmed
                      : (activeMatrix && activeMatrix.row !== ri && activeMatrix.col !== ci) || matrixRowDimmed;
                    const cellActive = hasMatch && activeMatrix?.row === ri && activeMatrix.col === ci;
                    const cellSelected = !hoveredMatrix && hasMatch && selectedMatrix?.row === ri && selectedMatrix.col === ci;
                    const cell = (
                      <div
                        className={`group p-2 text-center border-b border-dashed border-border text-xs transition-[opacity,filter] duration-200 ease-out ${hasMatch ? "cursor-pointer" : "cursor-default"} ${cellDimmed ? 'opacity-30 grayscale' : ''} ${hasMatch ? getTextColor(role) : 'text-muted-foreground/20'}`}
                        onMouseEnter={hasMatch ? () => setHoveredMatrix({row: ri, col: ci}) : undefined}
                        onMouseLeave={hasMatch ? () => setHoveredMatrix(null) : undefined}
                      >
                        {hasMatch ? (
                          <span className="relative inline-flex size-4 items-center justify-center align-middle">
                            <span className={`absolute inset-0 rounded-full bg-current opacity-0 transition-[opacity,transform] duration-200 group-hover:animate-pulse group-hover:scale-125 group-hover:opacity-25 ${cellActive ? "animate-pulse scale-125 opacity-25" : ""}`} />
                            <span className={`relative size-2 rounded-full bg-current transition-transform duration-200 ease-out group-hover:scale-90 ${cellActive ? "scale-90" : ""}`} />
                          </span>
                        ) : null}
                      </div>
                    );
                    if (example) {
                      return <Tooltip key={f} content={<span className="text-xs">{example}</span>} forceOpen={cellSelected ? true : undefined}>{cell}</Tooltip>;
                    }
                    return <React.Fragment key={f}>{cell}</React.Fragment>;
                  })}
                  <div className={`p-2 text-center border-b border-dashed border-border text-xs hover:bg-muted/20 transition-colors cursor-pointer text-muted-foreground hover:text-foreground transition-colors transition-[opacity,filter] ${((activeMatrix && activeMatrix.row !== ri) || activeMatrix?.row === -1 || matrixRowDimmed) ? 'opacity-30 grayscale' : ''}`}
                       onClick={() => setExpandedMatrix(prev => { const next = new Set(prev); if (next.has(role)) next.delete(role); else next.add(role); return next; })}
                       title={matrixExamples.length > 0 ? "展开例句" : ""}
                  >{matrixExamples.length > 0 ? <MoreHorizontal className="w-3.5 h-3.5" /> : null}</div>
                  {expandedMatrix.has(role) && matrixExamples.length > 0 && (
                      <div className="col-span-full p-3 bg-muted/20 border-b border-dashed border-border">
                        <div className="space-y-2">
                          {matrixExamples.map(({ form, example }) => (
                            <div key={form} className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm">
                              <Badge variant="outline" className={`text-xs shrink-0 ${ROLE_COLOR[form] ?? ''}`}>{form}</Badge>
                              <span className="text-muted-foreground leading-relaxed text-xs">
                                {renderExpandedExample(example, "text-sm")}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>

          {/* 性质 → 成分 → 结构形式 */}
          <h3 className="text-sm font-medium text-muted-foreground mb-3 mt-8">性质 → 成分 → 结构形式</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[22%]">性质</TableHead>
                <TableHead className="w-[48%]">常见对应成分</TableHead>
                <TableHead className="w-[30%]">结构形式（常见充当）</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold text-emerald-700">名词性<br /><span className="text-xs font-normal text-muted-foreground">Nominal</span></TableCell>
                <TableCell className="text-sm">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700">主语 S</Badge>
                    <Badge variant="outline" className="text-xs border-blue-300 text-blue-700">宾语 O</Badge>
                    <Badge variant="outline" className="text-xs border-orange-300 text-orange-700">表语 C</Badge>
                    <Badge variant="outline" className="text-xs border-stone-300 text-stone-700">同位语</Badge>
                    <Badge variant="outline" className="text-xs border-sky-300 text-sky-700">间接宾语 IO</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs border-emerald-300 bg-emerald-50 text-emerald-700">名词</Badge>
                    <Badge variant="outline" className="text-xs border-emerald-200 bg-emerald-50/60 text-emerald-600">代词</Badge>
                    <Badge variant="outline" className="text-xs border-cyan-300 bg-cyan-50 text-cyan-700">动名词</Badge>
                    <Badge variant="outline" className="text-xs border-purple-300 bg-purple-50 text-purple-700">不定式</Badge>
                    <Badge variant="outline" className="text-xs border-stone-300 bg-stone-50 text-stone-600">名词性从句</Badge>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold text-yellow-700">形容词性<br /><span className="text-xs font-normal text-muted-foreground">Adjectival</span></TableCell>
                <TableCell className="text-sm">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs border-yellow-300 text-yellow-700">定语</Badge>
                    <Badge variant="outline" className="text-xs border-orange-300 text-orange-700">表语 C</Badge>
                    <Badge variant="outline" className="text-xs border-[#C7D2CD] text-[#5a6b63]">宾语补足语 OC</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs border-yellow-300 bg-yellow-50 text-yellow-700">形容词</Badge>
                    <Badge variant="outline" className="text-xs border-lime-300 bg-lime-50 text-lime-700">分词</Badge>
                    <Badge variant="outline" className="text-xs border-violet-300 bg-violet-50 text-violet-700">介词短语</Badge>
                    <Badge variant="outline" className="text-xs border-purple-300 bg-purple-50 text-purple-700">不定式</Badge>
                    <Badge variant="outline" className="text-xs border-amber-300 bg-amber-50 text-amber-700">定语从句</Badge>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold text-rose-700">副词性<br /><span className="text-xs font-normal text-muted-foreground">Adverbial</span></TableCell>
                <TableCell className="text-sm">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs border-pink-300 text-pink-700">状语</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs border-rose-300 bg-rose-50 text-rose-700">副词</Badge>
                    <Badge variant="outline" className="text-xs border-violet-300 bg-violet-50 text-violet-700">介词短语</Badge>
                    <Badge variant="outline" className="text-xs border-purple-300 bg-purple-50 text-purple-700">不定式</Badge>
                    <Badge variant="outline" className="text-xs border-lime-300 bg-lime-50 text-lime-700">分词</Badge>
                    <Badge variant="outline" className="text-xs border-rose-300 bg-rose-50 text-rose-600">状语从句</Badge>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        <div className="flex w-full gap-4">
          {/* 左：句子成分 → 结构形式 */}
          <div className="flex-1 p-3">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">句子成分 → 结构形式</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[35%]">句子成分</TableHead>
                  <TableHead className="w-[65%]">常见充当的结构形式</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SENTENCE_COMPONENTS.map((row) => {
                  const rowDimmed =
                    (hoveredRole && row.roleKey !== hoveredRole) ||
                    (hoveredForm && !row.forms.some(f => resolveForm(f) === hoveredForm));
                  const isExpanded = expandedLeft === row.roleKey;
                  const examples = row.forms
                    .map(f => ({ form: f, example: getExample(resolveForm(f), row.roleKey) }))
                    .filter(e => e.example);
                  return (
                    <React.Fragment key={row.roleKey}>
                      <TableRow
                        className={`transition-[opacity,filter] cursor-pointer ${rowDimmed ? "opacity-30 grayscale" : ""}`}
                        onDoubleClick={() => setExpandedLeft(isExpanded ? null : row.roleKey)}
                      >
                        <TableCell className={`font-medium underline underline-offset-4 decoration-2 ${ROLE_UNDERLINE[row.roleKey]}`}>
                          {TEXT_HIGHLIGHT[row.roleKey] ? <span className={TEXT_HIGHLIGHT[row.roleKey]}>{row.component}</span> : row.component}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {row.forms.map((f) => {
                              const resolved = resolveForm(f);
                              const example = getExample(resolved, row.roleKey);
                              const badge = (
                                <Badge
                                  key={f}
                                  variant="outline"
                                  className={`text-xs cursor-pointer transition-[opacity,filter] ${FORM_COLOR[f] ?? ""} ${
                                    hoveredForm && hoveredForm !== resolved ? "opacity-30 grayscale" : ""
                                  }`}
                                  onMouseEnter={() => setHoveredForm(resolved)}
                                  onMouseLeave={() => setHoveredForm(null)}
                                >
                                  {f}
                                </Badge>
                              );
                              if (example) {
                                return (
                                  <Tooltip key={f} content={<span className="text-xs">{example}</span>}>
                                    {badge}
                                  </Tooltip>
                                );
                              }
                              return badge;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                      {isExpanded && examples.length > 0 && (
                        <TableRow className={`bg-muted/30 transition-[opacity,filter] ${rowDimmed ? "opacity-30 grayscale" : ""}`}>
                          <TableCell colSpan={2} className="py-3 overflow-hidden">
                            <div className="space-y-2">
                              {examples.map(({ form, example }) => (
                                <div key={form} className="grid grid-cols-[5rem_1fr] gap-x-2 gap-y-1 text-sm">
                                  <Badge variant="outline" className={`text-xs shrink-0 ${FORM_COLOR[form] ?? ""}`}>{form}</Badge>
                                  <span className="text-muted-foreground leading-relaxed">
                                    {renderExpandedExample(example, "text-base")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          <div className="mx-1 w-px self-stretch bg-border" />

          {/* 右：结构形式 → 句子成分 */}
          <div className="flex-1 p-3">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">结构形式 → 句子成分</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[35%]">结构形式</TableHead>
                  <TableHead className="w-[65%]">可以作的句子成分</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FORM_COMPONENTS.map((row) => {
                  const rowDimmed =
                    (hoveredForm && row.form !== hoveredForm) ||
                    (hoveredRole && !row.roles.includes(hoveredRole));
                  const isExpanded = expandedRight === row.form;
                  const examples = row.roles
                    .map(r => ({ role: r, example: getExample(row.form, r) }))
                    .filter(e => e.example);
                  return (
                    <React.Fragment key={row.form}>
                      <TableRow
                        className={`transition-[opacity,filter] cursor-pointer ${rowDimmed ? "opacity-30 grayscale" : ""}`}
                        onDoubleClick={() => setExpandedRight(isExpanded ? null : row.form)}
                      >
                        <TableCell className={`font-medium underline underline-offset-4 decoration-2 ${FORM_UNDERLINE[row.form]}`}>
                          {TEXT_HIGHLIGHT[row.form] ? <span className={TEXT_HIGHLIGHT[row.form]}>{row.form}</span> : row.form}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {row.roles.map((r) => {
                              const example = getExample(row.form, r);
                              const badge = (
                                <Badge
                                  key={r}
                                  variant="outline"
                                  className={`text-xs cursor-pointer transition-[opacity,filter] ${ROLE_COLOR[r] ?? ""} ${
                                    hoveredRole && hoveredRole !== r ? "opacity-30 grayscale" : ""
                                  }`}
                                  onMouseEnter={() => setHoveredRole(r)}
                                  onMouseLeave={() => setHoveredRole(null)}
                                >
                                  {r}
                                </Badge>
                              );
                              if (example) {
                                return (
                                  <Tooltip key={r} content={<span className="text-xs">{example}</span>}>
                                    {badge}
                                  </Tooltip>
                                );
                              }
                              return badge;
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                      {isExpanded && examples.length > 0 && (
                        <TableRow className={`bg-muted/30 transition-[opacity,filter] ${rowDimmed ? "opacity-30 grayscale" : ""}`}>
                          <TableCell colSpan={2} className="py-3 overflow-hidden">
                            <div className="space-y-2">
                              {examples.map(({ role, example }) => (
                                <div key={role} className="grid grid-cols-[4rem_1fr] gap-x-2 gap-y-1 text-sm">
                                  <Badge variant="outline" className={`text-xs shrink-0 ${ROLE_COLOR[role] ?? ""}`}>{role}</Badge>
                                  <span className="text-muted-foreground leading-relaxed">
                                    {renderExpandedExample(example, "text-base")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="mt-6 flex gap-6">
          <blockquote className="border-l-2 border-muted-foreground/30 pl-4 text-sm text-foreground space-y-1 flex-1">
            <p>动名词是<span className="underline decoration-emerald-400 decoration-2 underline-offset-2">名词性</span></p>
            <p>同位语具有<span className="underline decoration-emerald-400 decoration-2 underline-offset-2">名词性</span></p>
            <p>间接宾语由<span className="underline decoration-emerald-400 decoration-2 underline-offset-2">名词性</span>承担</p>
          </blockquote>
          <blockquote className="border-l-2 border-muted-foreground/30 pl-4 text-sm text-foreground space-y-1 flex-1">
            <p>表语 → 说明主语</p>
            <p>宾语补足语 → 说明宾语</p>
          </blockquote>
        </div>

      </div>
    </main>
  );
}
