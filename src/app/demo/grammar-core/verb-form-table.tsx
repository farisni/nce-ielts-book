"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LineHoverLink } from "@/components/ui/line-hover-link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  VERB_FORM_SECTIONS,
  type GrammarExplanation,
  type VerbFormSection,
  type VerbFormValue,
} from "./verb-form-data";

const SECTION_TONES: Record<VerbFormSection["tone"], string> = {
  green: "bg-emerald-50/70 hover:bg-emerald-50/70",
  blue: "bg-sky-50/70 hover:bg-sky-50/70",
  yellow: "bg-amber-50/70 hover:bg-amber-50/70",
};

interface SelectedForm extends GrammarExplanation {
  form: string;
}

function FormButton({ value, onSelect, className }: { value: VerbFormValue; onSelect: (value: SelectedForm) => void; className?: string }) {
  if (!value.detail) {
    return <span className={className || "text-muted-foreground"}>{value.label}</span>;
  }

  return (
    <LineHoverLink
      variant="slide"
      href="#verb-form-details"
      className={`px-2 font-semibold ${className || "text-foreground"}`}
      onClick={(event) => {
        event.preventDefault();
        onSelect({ form: value.label, ...value.detail! });
      }}
    >
      {value.label.includes(" / ") ? (
        <>
          {value.label.split(" / ")[0]}
          <span className="font-semibold text-muted-foreground"> / {value.label.split(" / ")[1]}</span>
        </>
      ) : value.label}
    </LineHoverLink>
  );
}

export function VerbFormTable() {
  const [selected, setSelected] = useState<SelectedForm | null>(null);

  return (
    <section className="mt-10 flex flex-col gap-4" aria-labelledby="verb-form-table-title">
      <div className="flex flex-col gap-1">
        <h2 id="verb-form-table-title" className="text-lg font-semibold">非谓语动词的形式、时态与语态</h2>
        <p className="text-sm text-muted-foreground">点击表格中的语法形式，查看含义、例句与时间关系。</p>
      </div>

      <ScrollArea orientation="horizontal" viewportClassName="max-w-full">
        <Table className="min-w-[860px] text-xs [&_th]:h-8 [&_tr]:border-dashed" containerClassName="overflow-visible">
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30">
              <TableHead className="w-28" aria-hidden="true" />
              <TableHead className="w-56" aria-hidden="true" />
              <TableHead colSpan={3} className="text-center">语态</TableHead>
            </TableRow>
            <TableRow className="bg-muted/20 hover:bg-muted/20">
              <TableHead aria-hidden="true" />
              <TableHead aria-hidden="true" />
              <TableHead colSpan={2} className="text-center">vt. 及物动词</TableHead>
              <TableHead className="border-l border-border text-center opacity-60">vi. 不及物动词</TableHead>
            </TableRow>
            <TableRow className="bg-muted/10 hover:bg-muted/10">
              <TableHead>形式</TableHead>
              <TableHead>时态</TableHead>
              <TableHead className="text-center"><Badge color="violet">主动语态</Badge></TableHead>
              <TableHead className="text-center"><Badge color="orange">被动语态</Badge></TableHead>
              <TableHead className="border-l border-border text-center opacity-60"><Badge color="violet">主动语态</Badge></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {VERB_FORM_SECTIONS.map((section) =>
              section.rows.map((row, rowIndex) => (
                <TableRow key={`${section.id}-${row.tense}`} className={`${SECTION_TONES[section.tone]} h-8`}>
                  {rowIndex === 0 && (
                    <TableCell rowSpan={section.rows.length} className="text-center align-middle">
                      <div className="flex flex-col items-center gap-0.5">
                        <span className={`text-2xl font-bold tracking-tight ${section.id === "doing" ? "text-emerald-600" : "text-[#d9683f]"}`}>{section.title}</span>
                        {section.subtitle && <span className="text-xs font-semibold text-muted-foreground">{section.subtitle}</span>}
                      </div>
                    </TableCell>
                  )}
                  <TableCell className="whitespace-normal">
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 font-semibold">{row.tense}</span>
                      <span className={`text-xs leading-relaxed ${section.id === "doing" ? "text-emerald-600" : "text-muted-foreground"}`}>
                        {row.timing.includes("谓语") ? (
                          <span className={`font-medium ${section.id === "doing" ? "text-emerald-600" : "text-[#d9683f]"}`}>{row.timing}</span>
                        ) : row.timing}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-sm"><FormButton value={row.transitiveActive} onSelect={setSelected} className={section.id === "doing" ? "!text-emerald-600" : undefined} /></TableCell>
                  <TableCell className="text-center text-sm"><FormButton value={row.transitivePassive} onSelect={setSelected} className={section.id === "doing" ? "!text-emerald-600" : undefined} /></TableCell>
                  <TableCell className="border-l border-border text-center text-sm opacity-60"><FormButton value={row.intransitiveActive} onSelect={setSelected} /></TableCell>
                </TableRow>
              )),
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      {selected && (
        <Card id="verb-form-details" className="bg-white ring-0" aria-live="polite">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-sky-700 flex items-center gap-2"><Lightbulb className="w-5 h-5" />{selected.form}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <Badge color="violet" className="self-start">含义</Badge>
              <p className="leading-relaxed">{selected.meaning}</p>
            </div>
            <div className="flex flex-col gap-1">
              <Badge color="orange" className="self-start">例句</Badge>
              <div className="flex flex-col gap-1 font-medium leading-relaxed">
                {selected.examples.map((example) => <p key={example}>{example}</p>)}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Badge className="self-start">解释</Badge>
              <p className="leading-relaxed text-muted-foreground">{selected.explanation}</p>
            </div>
            {selected.patterns && (
              <div className="flex items-start gap-4 border-t border-border pt-4 text-xs sm:col-span-3">
                <span className="shrink-0 font-semibold text-foreground">being 后面常跟：</span>
                <div className="flex flex-col gap-1 text-left text-foreground">
                  {selected.patterns.map((pattern) => <p key={pattern}>{pattern}</p>)}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </section>
  );
}
