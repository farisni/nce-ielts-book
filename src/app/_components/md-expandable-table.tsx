"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Ellipsis, Search, X } from "lucide-react";
import { useRootData, useRootClick } from "./md-root-data-context";
import { RootAffixSections } from "./md-root-affix-sections";

type ElementWithChildren = React.ReactElement<{ children?: React.ReactNode }>;

interface ExpandableTableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

function getChildren(node: React.ReactNode) {
  return React.isValidElement<{ children?: React.ReactNode }>(node)
    ? node.props.children
    : undefined;
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) return extractText(node.props.children);
  if (Array.isArray(node)) return node.map(extractText).join("");
  return "";
}

export function ExpandableTable({ children }: ExpandableTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState("");
  const rootData = useRootData();
  const onRootClick = useRootClick();

  const toggleRow = useCallback((index: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  }, []);

  const rows = React.Children.toArray(children);
  const thead = rows[0];
  const tbody = rows[1];

  if (!thead || !tbody) {
    return <table className="w-full border-collapse text-sm">{children}</table>;
  }

  const headerRows = React.Children.toArray(getChildren(thead));
  const headerCells = React.Children.toArray(getChildren(headerRows[0]));
  const headerTexts = headerCells.map((cell) =>
    typeof (cell as ElementWithChildren).props.children === "string"
      ? (cell as ElementWithChildren).props.children
      : ""
  );

  const bodyRows = React.Children.toArray(
    getChildren(tbody)
  );

  const filteredRows = useMemo(() => {
    const term = filter.trim().toLowerCase();
    if (!term) return bodyRows;
    return bodyRows.filter((row) => {
      const cells = React.Children.toArray(
        getChildren(row)
      );
      return cells.some((cell) => {
        const text = extractText((cell as ElementWithChildren).props.children).toLowerCase();
        return text.includes(term);
      });
    });
  }, [bodyRows, filter]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="relative flex-1 max-w-[240px]">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
          <input
            type="text"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setExpandedRows(new Set());
            }}
            placeholder="筛选表格..."
            className="w-full pl-7 pr-7 py-1.5 text-xs border border-gray-200 rounded-md bg-white outline-none focus:border-gray-300 transition-colors"
          />
          {filter && (
            <button
              type="button"
              onClick={() => setFilter("")}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="size-3" />
            </button>
          )}
        </div>
        {filter && (
          <span className="text-xs text-gray-400">
            {filteredRows.length} / {bodyRows.length} 行
          </span>
        )}
      </div>

      <table className="w-full border-collapse text-sm">
        <thead className="border-b border-gray-200">
          <tr>
            {headerCells.map((cell, i) => (
              <th key={i} className="px-3 py-2 text-left text-xs font-medium text-gray-500">
                {headerTexts[i]}
              </th>
            ))}
            <th className="w-10 px-1 py-2" />
          </tr>
        </thead>
        <tbody>
          {filteredRows.length === 0 ? (
            <tr>
              <td colSpan={headerCells.length + 1} className="px-3 py-8 text-center text-sm text-gray-400">
                {filter ? "无匹配结果" : "暂无数据"}
              </td>
            </tr>
          ) : (
            filteredRows.map((row, ri) => {
              const cells = React.Children.toArray(
                getChildren(row)
              );
              const isExpanded = expandedRows.has(ri);
              const wordCell = cells.length > 1
                ? extractText((cells[1] as ElementWithChildren).props.children).trim()
                : "";
              const rd = wordCell ? rootData[wordCell] : undefined;

              return (
                <React.Fragment key={ri}>
                  <tr
                    onClick={() => toggleRow(ri)}
                    className={`border-b border-gray-100 cursor-pointer transition-colors ${
                      isExpanded ? "bg-gray-50/50" : "hover:bg-gray-50/30"
                    }`}
                  >
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2 text-gray-600 text-sm">
                        {(cell as ElementWithChildren).props.children}
                      </td>
                    ))}
                    <td className="w-10 px-1 py-2 text-center">
                      <Ellipsis className={`size-3.5 transition-colors ${isExpanded ? "text-gray-400" : "text-gray-300"}`} />
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="border-b border-gray-100">
                      <td colSpan={cells.length + 1} className="px-3 py-2 bg-gray-50/30">
                        {rd ? (
                          <RootAffixSections data={rd} onRootClick={onRootClick} />
                        ) : (
                          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
                            {headerTexts.map((header, hi) => {
                              if (hi === 0) return null;
                              const cellContent = (cells[hi] as ElementWithChildren).props.children;
                              return (
                                <React.Fragment key={hi}>
                                  <span className="text-xs text-gray-400 whitespace-nowrap">{header}</span>
                                  <span className="text-sm text-gray-600">{cellContent}</span>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
