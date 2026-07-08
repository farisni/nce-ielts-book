"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/reui/badge";

const SENTENCE_COMPONENTS = [
  { component: "主语 (S)", roleKey: "主语", forms: ["名词", "代词", "动名词", "不定式", "名词性从句"] },
  { component: "谓语 (V)", roleKey: "谓语", forms: ["动词", "动词短语"] },
  { component: "宾语 (O)", roleKey: "宾语", forms: ["名词", "代词", "动名词", "不定式", "名词性从句"] },
  { component: "表语 (C)", roleKey: "表语", forms: ["名词", "形容词", "介词短语", "分词", "从句"] },
  { component: "间接宾语 (IO)", roleKey: "间接宾语", forms: ["名词", "代词"] },
  { component: "直接宾语 (DO)", roleKey: "直接宾语", forms: ["名词", "代词", "动名词", "不定式", "名词性从句"] },
  { component: "宾语补足语 (OC)", roleKey: "宾语补足语", forms: ["名词", "形容词", "不定式", "分词", "介词短语"] },
];

const FORM_COMPONENTS = [
  { form: "名词", roles: ["主语", "宾语", "表语", "宾语补足语", "同位语"] },
  { form: "代词", roles: ["主语", "宾语", "间接宾语", "表语", "宾语补足语"] },
  { form: "形容词", roles: ["表语", "宾语补足语", "定语"] },
  { form: "副词", roles: ["状语"] },
  { form: "介词短语", roles: ["状语", "表语", "定语", "宾语补足语", "同位语"] },
  { form: "不定式", roles: ["主语", "宾语", "表语", "定语", "状语", "宾语补足语"] },
  { form: "动名词", roles: ["主语", "宾语", "表语", "定语"] },
  { form: "分词", roles: ["定语", "表语", "状语", "宾语补足语", "同位语"] },
  { form: "从句", roles: ["主语", "宾语", "表语", "定语", "状语", "同位语"] },
];

const ROLE_COLOR: Record<string, string> = {
  "主语": "border-emerald-300 bg-emerald-50 text-emerald-700",
  "谓语": "border-blue-300 bg-blue-50 text-blue-700",
  "宾语": "border-blue-300 bg-blue-50 text-blue-700",
  "间接宾语": "border-sky-300 bg-sky-50 text-sky-700",
  "直接宾语": "border-orange-300 bg-orange-50 text-orange-700",
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
  "直接宾语": "decoration-blue-500",
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
  "动名词": "border-emerald-300 bg-emerald-50 text-emerald-700",
  "分词": "border-lime-300 bg-lime-50 text-lime-700",
  "从句": "border-indigo-300 bg-indigo-50 text-indigo-700",
  "动词": "border-[#c4623d] bg-[#c4623d]/15 text-[#c4623d]",
  "动词短语": "border-[#c4623d] bg-[#c4623d]/15 text-[#c4623d]",
};

const FORM_UNDERLINE: Record<string, string> = {
  "名词": "decoration-emerald-400",
  "代词": "decoration-emerald-400",
  "形容词": "decoration-yellow-400",
  "副词": "decoration-rose-400",
  "介词短语": "decoration-violet-400",
  "不定式": "decoration-purple-400",
  "动名词": "decoration-emerald-400",
  "分词": "decoration-lime-400",
  "从句": "decoration-indigo-400",
};

export default function GrammarCorePage() {
  const [hoveredForm, setHoveredForm] = useState<string | null>(null);

  // 左表 Badge 是否被 hover 的 form 匹配
  const isFormMatch = (formName: string) => hoveredForm === formName;

  // 右表某一行是否高亮
  const isRowHighlight = (formName: string) => !hoveredForm || hoveredForm === formName;

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-4xl rounded-lg border border-dashed border-border p-8">
        <div className="flex w-full gap-4">
          {/* 左：句子成分 → 结构形式 */}
          <div className="flex-1 rounded-md border border-dashed border-border p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>句子成分</TableHead>
                  <TableHead>常见充当的结构形式</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SENTENCE_COMPONENTS.map((row) => (
                  <TableRow key={row.component}>
                    <TableCell className={`font-medium underline underline-offset-4 decoration-2 ${ROLE_UNDERLINE[row.roleKey]}`}>
                      {row.component}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {row.forms.map((f) => (
                          <Badge
                            key={f}
                            variant="outline"
                            className={`text-xs cursor-pointer transition-opacity ${FORM_COLOR[f] ?? ""} ${
                              hoveredForm && !isFormMatch(f) ? "opacity-30" : ""
                            }`}
                            onMouseEnter={() => setHoveredForm(f)}
                            onMouseLeave={() => setHoveredForm(null)}
                          >
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 右：结构形式 → 句子成分 */}
          <div className="flex-1 rounded-md border border-dashed border-border p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>结构形式</TableHead>
                  <TableHead>可以作的句子成分</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FORM_COMPONENTS.map((row) => (
                  <TableRow
                    key={row.form}
                    className={`transition-opacity ${
                      isRowHighlight(row.form) ? "" : "opacity-25"
                    }`}
                  >
                    <TableCell className={`font-medium underline underline-offset-4 decoration-2 ${FORM_UNDERLINE[row.form]}`}>
                      {row.form}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {row.roles.map((r) => (
                          <Badge key={r} variant="outline" className={`text-xs ${ROLE_COLOR[r] ?? ""}`}>
                            {r}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
