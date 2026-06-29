"use client";

import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const cities = [
  "Beijing", "Shanghai", "Guangzhou", "Shenzhen",
  "Chengdu", "Hangzhou", "Wuhan", "Nanjing",
  "Tokyo", "Osaka", "Sapporo", "Fukuoka",
  "Seoul", "Busan", "Incheon", "Daegu",
  "Singapore", "Bangkok", "Jakarta", "Manila",
  "New York", "Los Angeles", "Chicago", "Houston",
  "London", "Paris", "Berlin", "Madrid",
];

function metric(r: number, c: number): string {
  const base = Math.sin(r * 0.7 + c * 0.5) * 15 + 20;
  return base.toFixed(1);
}

export default function ScrollTableDemo() {
  return (
    <section className="mx-auto max-w-6xl rounded-xl border-2 border-dashed border-border px-6 py-16">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">ScrollArea · Table</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          orientation=&quot;both&quot; — 表格同时超出容器宽高，边缘渐变提示
        </p>
      </div>

      <ScrollArea orientation="both" className="h-80 w-full rounded-lg">
        <Table className="w-max">
          <TableHeader>
            <TableRow>
              <TableHead>City</TableHead>
              {months.map((m) => (
                <TableHead key={m} className="text-right">{m}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {cities.map((city, r) => (
              <TableRow key={city} index={r}>
                <TableCell className="font-medium">{city}</TableCell>
                {months.map((m, c) => (
                  <TableCell key={m} className="text-right tabular-nums">
                    {metric(r, c)}°C
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </section>
  );
}
