"use client";

import React from "react";

type SimpleTableProps = React.TableHTMLAttributes<HTMLTableElement>;

function getChildren(node: React.ReactNode) {
  return React.isValidElement<{ children?: React.ReactNode }>(node)
    ? node.props.children
    : undefined;
}

/** 简洁表格——只加列宽，不展开 */
export function SimpleTable({ children }: SimpleTableProps) {
  const rows = React.Children.toArray(children);
  const thead = rows[0];

  if (!thead) {
    return <table className="w-full border-collapse text-sm">{children}</table>;
  }

  const headerRows = React.Children.toArray(getChildren(thead));
  const headerCells = React.Children.toArray(getChildren(headerRows[0]));
  const isTwoColumnTable = headerCells.length === 2;

  if (!isTwoColumnTable) {
    return <table className="w-full border-collapse text-sm">{children}</table>;
  }

  // 对两列表格应用 3:7 (30%/70%) 的列宽
  const styledThead = React.cloneElement(thead as React.ReactElement<{ children?: React.ReactNode }>, {
    children: React.Children.map(getChildren(thead), (tr) =>
      React.cloneElement(tr as React.ReactElement<{ children?: React.ReactNode }>, {
        children: React.Children.map(getChildren(tr), (cell, i) =>
          React.cloneElement(cell as React.ReactElement<{ className?: string }>, {
            className: `px-3 py-2 text-left text-xs font-medium text-gray-500 ${i === 0 ? "w-[30%]" : "w-[70%]"}`,
          })
        ),
      })
    ),
  });

  const styledRows = React.Children.map(rows.slice(1), (node) => {
    // node is <tbody>, get its <tr> children
    const trs = React.Children.toArray(getChildren(node));
    return React.cloneElement(node as React.ReactElement<{ children?: React.ReactNode }>, {
      children: trs.map((tr) => {
        // get <td> children of each <tr>
        const tds = React.Children.toArray(getChildren(tr));
        return React.cloneElement(tr as React.ReactElement<{ children?: React.ReactNode }>, {
          children: tds.map((td, ci) =>
            React.cloneElement(td as React.ReactElement<{ className?: string }>, {
              className: `px-3 py-2 text-gray-400 text-sm align-top ${ci === 0 ? "w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]" : "w-[70%]"}`,
            })
          ),
        });
      }),
    });
  });

  return (
    <table className="w-full border-collapse text-sm table-fixed">
      {styledThead}
      {styledRows}
    </table>
  );
}
