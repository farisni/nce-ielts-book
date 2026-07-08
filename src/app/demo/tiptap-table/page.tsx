"use client";

import React, { useCallback, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import {
  Table2,
  Plus,
  Trash2,
  Columns2,
  Rows2,
  TableCellsMerge,
  TableCellsSplit,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo2,
  Redo2,
  Eye,
  Pen,
} from "lucide-react";

function ToolbarButton({
  onClick,
  active,
  children,
  title,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`inline-flex items-center justify-center size-8 rounded-md border text-xs transition-colors
        ${active
          ? "border-zinc-400 bg-zinc-100 text-zinc-900"
          : "border-transparent text-zinc-500 hover:border-zinc-200 hover:bg-zinc-50 hover:text-zinc-700"
        }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="mx-1 h-6 w-px bg-zinc-200" />;
}

const INITIAL_CONTENT = `
<h2>📋 TipTap Table 演示</h2>
<p>这是一个基于 <strong>@tiptap/extension-table</strong> 的表格编辑器演示。点击下方工具栏按钮来操作表格：</p>
<p></p>
<table>
  <tbody>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>城市</th>
      <th>职业</th>
    </tr>
    <tr>
      <td>张三</td>
      <td>28</td>
      <td>北京</td>
      <td>前端工程师</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>32</td>
      <td>上海</td>
      <td>产品经理</td>
    </tr>
    <tr>
      <td>王五</td>
      <td>25</td>
      <td>深圳</td>
      <td>UI 设计师</td>
    </tr>
    <tr>
      <td>赵六</td>
      <td>30</td>
      <td>杭州</td>
      <td>后端开发</td>
    </tr>
  </tbody>
</table>
<p></p>
<p>你可以：</p>
<ul>
  <li>点击表格内部，然后使用工具栏按钮 <strong>插入/删除</strong> 行列</li>
  <li><strong>双击</strong>单元格内容进行编辑</li>
  <li>使用 <strong>Tab / Shift+Tab</strong> 在单元格间导航</li>
  <li>拖动列边框调整列宽</li>
</ul>
`;

export default function TipTapTableDemo() {
  const [tableInfo, setTableInfo] = useState<{
    rows: number;
    cols: number;
  } | null>(null);
  const [editable, setEditable] = useState(true);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Table.configure({
        resizable: true,
        allowTableNodeSelection: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: INITIAL_CONTENT,
    editable: true,
    editorProps: {
      attributes: {
        class:
          "prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-strong:text-zinc-800 focus:outline-none min-h-[400px] px-6 py-5",
      },
    },
  });

  const toggleEditable = useCallback(() => {
    if (!editor) return;
    const next = !editor.isEditable;
    editor.setEditable(next);
    setEditable(next);
  }, [editor]);

  const updateTableInfo = useCallback(() => {
    if (!editor) return;
    const { $anchor } = editor.state.selection;
    const tableNode = $anchor.node(-1);
    const isInTable = tableNode?.type.name === "table";
    if (isInTable) {
      const rows = tableNode.childCount;
      const cols = rows > 0 ? tableNode.child(0).childCount : 0;
      setTableInfo({ rows, cols });
    } else {
      setTableInfo(null);
    }
  }, [editor]);

  // Track selection to update table info
  React.useEffect(() => {
    if (!editor) return;
    editor.on("selectionUpdate", updateTableInfo);
    editor.on("transaction", updateTableInfo);
    return () => {
      editor.off("selectionUpdate", updateTableInfo);
      editor.off("transaction", updateTableInfo);
    };
  }, [editor, updateTableInfo]);

  const addTable = useCallback(() => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  }, [editor]);

  const addColumnBefore = useCallback(() => {
    editor?.chain().focus().addColumnBefore().run();
  }, [editor]);
  const addColumnAfter = useCallback(() => {
    editor?.chain().focus().addColumnAfter().run();
  }, [editor]);
  const deleteColumn = useCallback(() => {
    editor?.chain().focus().deleteColumn().run();
  }, [editor]);

  const addRowBefore = useCallback(() => {
    editor?.chain().focus().addRowBefore().run();
  }, [editor]);
  const addRowAfter = useCallback(() => {
    editor?.chain().focus().addRowAfter().run();
  }, [editor]);
  const deleteRow = useCallback(() => {
    editor?.chain().focus().deleteRow().run();
  }, [editor]);

  const deleteTable = useCallback(() => {
    editor?.chain().focus().deleteTable().run();
  }, [editor]);

  const mergeCells = useCallback(() => {
    editor?.chain().focus().mergeCells().run();
  }, [editor]);
  const splitCell = useCallback(() => {
    editor?.chain().focus().splitCell().run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <section className="mx-auto flex w-[1022px] min-w-[1022px] flex-none flex-col rounded-md p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex items-center justify-center size-9 rounded-lg border border-zinc-200 bg-zinc-50">
          <Table2 className="size-4 text-zinc-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">
            TipTap Table 演示
          </h1>
          <p className="text-xs text-zinc-400">@tiptap/extension-table</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 rounded-lg border border-zinc-200 bg-zinc-50/50 p-1.5 mb-3">
        {/* Undo/Redo */}
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="撤销"
        >
          <Undo2 className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="重做"
        >
          <Redo2 className="size-3.5" />
        </ToolbarButton>

        <Divider />

        {/* Text formatting */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          active={editor.isActive("heading", { level: 2 })}
          title="标题"
        >
          <Heading1 className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          active={editor.isActive("heading", { level: 3 })}
          title="副标题"
        >
          <Heading2 className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="无序列表"
        >
          <List className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="有序列表"
        >
          <ListOrdered className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          title="引用"
        >
          <Quote className="size-3.5" />
        </ToolbarButton>

        <Divider />

        {/* Insert table */}
        <ToolbarButton onClick={addTable} title="插入表格 (3x3)">
          <Plus className="size-3.5" />
          <Table2 className="size-3.5 ml-0.5" />
        </ToolbarButton>

        <Divider />

        {/* Column operations */}
        <ToolbarButton
          onClick={addColumnBefore}
          title="左侧插入列"
        >
          <ArrowLeft className="size-3.5" />
          <Columns2 className="size-3.5 ml-0.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={addColumnAfter}
          title="右侧插入列"
        >
          <Columns2 className="size-3.5" />
          <ArrowRight className="size-3.5 ml-0.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={deleteColumn}
          title="删除当前列"
        >
          <Trash2 className="size-3.5" />
          <Columns2 className="size-3.5 ml-0.5" />
        </ToolbarButton>

        <Divider />

        {/* Row operations */}
        <ToolbarButton
          onClick={addRowBefore}
          title="上方插入行"
        >
          <ArrowUp className="size-3.5" />
          <Rows2 className="size-3.5 ml-0.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={addRowAfter}
          title="下方插入行"
        >
          <Rows2 className="size-3.5" />
          <ArrowDown className="size-3.5 ml-0.5" />
        </ToolbarButton>
        <ToolbarButton
          onClick={deleteRow}
          title="删除当前行"
        >
          <Trash2 className="size-3.5" />
          <Rows2 className="size-3.5 ml-0.5" />
        </ToolbarButton>

        <Divider />

        {/* Cell merge/split */}
        <ToolbarButton onClick={mergeCells} title="合并单元格">
          <TableCellsMerge className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton onClick={splitCell} title="拆分单元格">
          <TableCellsSplit className="size-3.5" />
        </ToolbarButton>

        <Divider />

        {/* Delete table */}
        <ToolbarButton onClick={deleteTable} title="删除表格">
          <Trash2 className="size-3.5 text-red-400" />
          <Table2 className="size-3.5 ml-0.5 text-red-400" />
        </ToolbarButton>

        {/* Table info badge */}
        {tableInfo && (
          <div className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs text-zinc-500">
            <Table2 className="size-3" />
            {tableInfo.rows} 行 × {tableInfo.cols} 列
          </div>
        )}

        {/* Read-only / Edit toggle */}
        <ToolbarButton
          onClick={toggleEditable}
          active={!editable}
          title={editable ? "切换到只读模式" : "切换到编辑模式"}
        >
          {editable ? (
            <Eye className="size-3.5" />
          ) : (
            <Pen className="size-3.5" />
          )}
        </ToolbarButton>
      </div>

      {/* Editor */}
      <div className="rounded-lg bg-white">
        <EditorContent editor={editor} />
      </div>

      {/* Footer info */}
      <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
        点击表格内部后工具栏会显示当前表格信息（行数×列数）。使用工具栏按钮可插入/删除行列、合并拆分单元格。
        <br />
        <strong>快捷键：</strong> Tab 跳至下一单元格 · Shift+Tab 跳至上一单元格 · 拖动列边框调整列宽。
      </p>

      {/* Custom styles for TipTap table — matching n3-l41 project style */}
      <style jsx global>{`
        /* Table resizable handle */
        .ProseMirror table .column-resize-handle {
          position: absolute;
          right: -2px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: transparent;
          cursor: col-resize;
          user-select: none;
          z-index: 1;
        }
        .ProseMirror table .column-resize-handle:hover,
        .ProseMirror table .column-resize-handle.is-dragging {
          background: #a1a1aa;
        }

        /* Table base styles — project look: row-border only, no grid */
        .ProseMirror table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          margin: 1.5rem 0;
          overflow: hidden;
          color: #000;
          font-size: 1rem;
          border: none;
        }
        .ProseMirror .tableWrapper {
          border: none;
        }
        .ProseMirror table td,
        .ProseMirror table th {
          min-width: 100px;
          height: 41px;
          box-sizing: border-box;
          border: none;
          padding: 0.5rem 0.75rem;
          vertical-align: top;
          position: relative;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        .ProseMirror table th {
          background: transparent;
          font-weight: 500;
          color: #6b7280;
          font-size: 0.75rem;
          text-transform: none;
          letter-spacing: normal;
        }
        .ProseMirror table td {
          color: #4b5563;
        }
        .ProseMirror table td p,
        .ProseMirror table th p {
          margin-top: 0;
          margin-bottom: 0;
        }
        .ProseMirror table tr {
          border-bottom: 1px solid #e5e7eb;
        }
        .ProseMirror table tr:hover td,
        .ProseMirror table tr:hover th {
          background: transparent;
        }

        /* Selected cell — only in editable mode */
        .ProseMirror[contenteditable="true"] table .selectedCell {
          background: #f0f9ff;
          outline: 1.5px solid #7dd3fc;
          outline-offset: -1px;
        }
        .ProseMirror[contenteditable="false"] table .selectedCell {
          background: transparent;
          outline: none;
        }

        /* Editor min height */
        .ProseMirror {
          min-height: 400px;
          outline: none;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          color: #a1a1aa;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
