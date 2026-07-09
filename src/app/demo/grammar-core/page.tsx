"use client";

import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/reui/badge";
import { Tooltip } from "@/components/ui/tooltip";

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
  "主语": "border-emerald-300 bg-emerald-50 text-emerald-700",
  "谓语": "border-blue-300 bg-blue-50/30 text-blue-700",
  "宾语": "border-blue-300 bg-blue-50 text-blue-700",
  "间接宾语": "border-sky-300 bg-sky-50 text-sky-700",
  "表语": "border-orange-300 bg-orange-50 text-orange-700",
  "宾语补足语": "border-[#C7D2CD] bg-[#C7D2CD]/20 text-[#5a6b63]",
  "定语": "border-yellow-300 bg-yellow-50 text-yellow-700",
  "状语": "border-pink-300 bg-pink-50 text-pink-700",
  "同位语": "border-stone-300 bg-stone-50 text-stone-700",
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
  ["从句", ["主语","宾语","表语","定语","状语","同位语"]],
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

function getExample(form: string, role: string): string | null {
  return EXAMPLE_SENTENCES[`${form}::${role}`] ?? null;
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

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-dashed border-border p-4">
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
                        className={`transition-opacity cursor-pointer ${rowDimmed ? "opacity-25" : ""}`}
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
                                  className={`text-xs cursor-pointer transition-opacity ${FORM_COLOR[f] ?? ""} ${
                                    hoveredForm && hoveredForm !== resolved ? "opacity-30" : ""
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
                        <TableRow className={`bg-muted/30 ${rowDimmed ? "opacity-25" : ""}`}>
                          <TableCell colSpan={2} className="py-3 overflow-hidden">
                            <div className="space-y-2">
                              {examples.map(({ form, example }) => (
                                <div key={form} className="grid grid-cols-[5rem_1fr] gap-x-2 gap-y-1 text-sm">
                                  <Badge variant="outline" className={`text-xs shrink-0 ${FORM_COLOR[form] ?? ""}`}>{form}</Badge>
                                  <span className="text-muted-foreground leading-relaxed">{example}</span>
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
                        className={`transition-opacity cursor-pointer ${rowDimmed ? "opacity-25" : ""}`}
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
                                  className={`text-xs cursor-pointer transition-opacity ${ROLE_COLOR[r] ?? ""} ${
                                    hoveredRole && hoveredRole !== r ? "opacity-30" : ""
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
                        <TableRow className={`bg-muted/30 ${rowDimmed ? "opacity-25" : ""}`}>
                          <TableCell colSpan={2} className="py-3 overflow-hidden">
                            <div className="space-y-2">
                              {examples.map(({ role, example }) => (
                                <div key={role} className="grid grid-cols-[4rem_1fr] gap-x-2 gap-y-1 text-sm">
                                  <Badge variant="outline" className={`text-xs shrink-0 ${ROLE_COLOR[role] ?? ""}`}>{role}</Badge>
                                  <span className="text-muted-foreground leading-relaxed">{example}</span>
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
        {/* 句子成分 × 结构形式 矩阵 */}
        <h3 className="text-sm font-medium text-muted-foreground mb-3 mt-6">句子成分 × 结构形式 矩阵</h3>
        <div className="mt-8 overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid rounded-md"
                 style={{ gridTemplateColumns: '5rem repeat(9, 1fr) 2rem' }}>
              <div className="p-2 text-xs font-medium text-muted-foreground border-b border-dashed border-border"></div>
              {(() => {
                const expandedColumns = new Set(MATRIX_ROWS.filter(([r]) => expandedMatrix.has(r)).flatMap(([, forms]) => forms));
                const anyExpanded = expandedMatrix.size > 0;
                return MATRIX_FORMS.map((f, ci) => {
                const tipMap: Record<string, string> = { "表语": "表语 → 说明主语", "宾语补足语": "宾语补足语 → 说明宾语", "间接宾语": "间接宾语由名词性承担", "同位语": "同位语具有名词性" };
                const tooltipText = tipMap[f];
                const header = <div className={`p-2 text-xs font-medium text-center border-b border-dashed border-border transition-opacity ${ROLE_COLOR[f] ?? ''} ${(hoveredMatrix && hoveredMatrix.col !== ci) || (anyExpanded && !expandedColumns.has(f)) ? 'opacity-25' : ''}`}>{f}</div>;
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
                  return (
                <React.Fragment key={role}>
                  <div
                    className={`p-2 text-xs font-medium border-b border-dashed border-border transition-opacity underline underline-offset-4 decoration-2 ${FORM_UNDERLINE[role] ?? ''} ${(hoveredMatrix && hoveredMatrix.row !== ri) || matrixRowDimmed ? 'opacity-25' : ''}`}
                  >{role}</div>
                  {MATRIX_FORMS.map((f, ci) => {
                    const hasMatch = forms.includes(f);
                    const example = hasMatch ? getExample(role, f) : null;
                    const cellDimmed = (hoveredMatrix && hoveredMatrix.row !== ri && hoveredMatrix.col !== ci) || matrixRowDimmed;
                    const cell = (
                      <div
                        className={`p-2 text-center border-b border-dashed border-border text-xs cursor-default transition-opacity ${cellDimmed ? 'opacity-25' : ''} ${hasMatch ? (FORM_COLOR[role] ?? '') : 'text-muted-foreground/20'}`}
                        onMouseEnter={() => setHoveredMatrix({row: ri, col: ci})}
                        onMouseLeave={() => setHoveredMatrix(null)}
                      >
                        {hasMatch ? '●' : '·'}
                      </div>
                    );
                    if (example) {
                      return <Tooltip key={f} content={<span className="text-xs">{example}</span>}>{cell}</Tooltip>;
                    }
                    return <React.Fragment key={f}>{cell}</React.Fragment>;
                  })}
                  <div className={`p-2 text-center border-b border-dashed border-border text-xs cursor-pointer text-muted-foreground hover:text-foreground transition-colors transition-opacity ${matrixRowDimmed ? 'opacity-25' : ''}`}
                       onClick={() => setExpandedMatrix(prev => { const next = new Set(prev); if (next.has(role)) next.delete(role); else next.add(role); return next; })}
                       title={matrixExamples.length > 0 ? "展开例句" : ""}
                  >{matrixExamples.length > 0 ? <MoreHorizontal className="w-3.5 h-3.5" /> : null}</div>
                  {expandedMatrix.has(role) && matrixExamples.length > 0 && (
                      <div className="col-span-full p-3 bg-muted/20 border-b border-dashed border-border">
                        <div className="space-y-2">
                          {matrixExamples.map(({ form, example }) => (
                            <div key={form} className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm">
                              <Badge variant="outline" className={`text-xs shrink-0 ${ROLE_COLOR[form] ?? ''}`}>{form}</Badge>
                              <span className="text-muted-foreground leading-relaxed text-xs">{example}</span>
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

      </div>
    </main>
  );
}
