"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  Position,
  ReactFlow,
  ReactFlowProvider,
  type Connection,
  type Edge,
  type Node,
  useEdgesState,
  useNodesState,
  useOnSelectionChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { hierarchy, tree } from "d3-hierarchy";
import { Maximize2, Plus } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Grammar tree data                                                 */
/* ------------------------------------------------------------------ */

interface TreeNode {
  id: string;
  title: string;
  type: "root" | "pattern" | "component" | "clause" | "form";
  children?: TreeNode[];
}

const grammarTree: TreeNode = {
  id: "root",
  title: "英语五大句型",
  type: "root",
  children: [
    {
      id: "sv",
      title: "主谓 SV",
      type: "pattern",
      children: [
        {
          id: "sv-vi",
          title: "不及物动词",
          type: "component",
          children: [
            { id: "sv-vi-bare", title: "The sun rises.", type: "form" },
            { id: "sv-vi-adv", title: "Birds fly south.", type: "form" },
          ],
        },
      ],
    },
    {
      id: "svo",
      title: "主谓宾 SVO",
      type: "pattern",
      children: [
        {
          id: "svo-subject",
          title: "主语 Subject",
          type: "component",
          children: [
            { id: "svo-subj-noun", title: "名词短语", type: "form" },
            { id: "svo-subj-clause", title: "主语从句", type: "clause" },
          ],
        },
        {
          id: "svo-object",
          title: "宾语 Object",
          type: "component",
          children: [
            { id: "svo-obj-noun", title: "名词", type: "form" },
            { id: "svo-obj-infinitive", title: "不定式", type: "form" },
            {
              id: "svo-obj-that",
              title: "宾语从句",
              type: "clause",
              children: [{ id: "svo-obj-that-sub", title: "that 从句", type: "form" }],
            },
          ],
        },
      ],
    },
    {
      id: "svc",
      title: "主系表 SVC",
      type: "pattern",
      children: [
        {
          id: "svc-predicative",
          title: "表语",
          type: "component",
          children: [
            { id: "svc-adj", title: "形容词", type: "form" },
            { id: "svc-noun", title: "名词", type: "form" },
            { id: "svc-prep", title: "介词短语", type: "form" },
          ],
        },
      ],
    },
    {
      id: "svoo",
      title: "主谓双宾 SVOO",
      type: "pattern",
      children: [
        {
          id: "svoo-io",
          title: "间接宾语",
          type: "component",
          children: [
            { id: "svoo-io-pronoun", title: "人称代词", type: "form" },
          ],
        },
        {
          id: "svoo-do",
          title: "直接宾语",
          type: "component",
          children: [
            { id: "svoo-do-noun", title: "名词短语", type: "form" },
            { id: "svoo-do-clause", title: "从句", type: "clause" },
          ],
        },
      ],
    },
    {
      id: "svoc",
      title: "主谓宾补 SVOC",
      type: "pattern",
      children: [
        {
          id: "svoc-obj",
          title: "宾语",
          type: "component",
          children: [
            { id: "svoc-obj-noun", title: "名词", type: "form" },
          ],
        },
        {
          id: "svoc-comp",
          title: "宾补",
          type: "component",
          children: [
            { id: "svoc-comp-adj", title: "形容词补语", type: "form" },
            { id: "svoc-comp-bare-inf", title: "不带 to 不定式", type: "form" },
          ],
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Collapse helpers                                                   */
/* ------------------------------------------------------------------ */

/** 收集 grammarTree 中所有有 children 的节点 id */
function collectParentIds(tree: TreeNode): Set<string> {
  const ids = new Set<string>();
  function walk(node: TreeNode) {
    if (node.children && node.children.length > 0) {
      ids.add(node.id);
      node.children.forEach(walk);
    }
  }
  walk(tree);
  return ids;
}

const PARENT_IDS = collectParentIds(grammarTree);

/** 根据折叠状态剪枝：collapsed 节点去掉 children */
function pruneTree(node: TreeNode, collapsed: Set<string>): TreeNode {
  if (collapsed.has(node.id)) {
    return { ...node, children: undefined };
  }
  if (!node.children) return node;
  return { ...node, children: node.children.map((c) => pruneTree(c, collapsed)) };
}

/* ------------------------------------------------------------------ */
/*  d3-hierarchy layout                                               */
/* ------------------------------------------------------------------ */

const NODE_STYLE_MAP: Record<string, { w: number; h: number }> = {
  root:     { w: 220, h: 80 },
  pattern:  { w: 180, h: 70 },
  component:{ w: 150, h: 60 },
  clause:   { w: 150, h: 60 },
  form:     { w: 120, h: 50 },
};

function treeToGraph(data: TreeNode) {
  const root = hierarchy<TreeNode>(data);
  const layout = tree<TreeNode>().nodeSize([100, 320]);
  const laidOut = layout(root);

  const nodes = laidOut.descendants().map((d: any) => {
    const size = NODE_STYLE_MAP[d.data.type] ?? { w: 150, h: 60 };
    return {
      id: d.data.id,
      position: { x: d.y, y: d.x - size.h / 2 },
      data: { label: d.data.title, type: d.data.type, size },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });

  const edges: Edge[] = laidOut.links().map((link) => ({
    id: `${link.source.data!.id}-${link.target.data!.id}`,
    source: link.source.data!.id,
    target: link.target.data!.id,
    type: "smoothstep",
  }));

  return { nodes, edges };
}

/* ------------------------------------------------------------------ */
/*  Type → style map                                                  */
/* ------------------------------------------------------------------ */

const TYPE_STYLES: Record<string, React.CSSProperties> = {
  root: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d4d4d8",
    borderRadius: 12,
    background: "#18181b",
    color: "#fafafa",
    fontWeight: 700,
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pattern: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bfdbfe",
    borderRadius: 12,
    background: "#eff6ff",
    color: "#1e3a5f",
    fontWeight: 600,
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  component: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bbf7d0",
    borderRadius: 12,
    background: "#f0fdf4",
    color: "#14532d",
    fontWeight: 600,
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  clause: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fde68a",
    borderRadius: 12,
    background: "#fffbeb",
    color: "#713f12",
    fontWeight: 600,
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#d4d4d8",
    borderRadius: 10,
    background: "#ffffff",
    color: "#52525b",
    fontWeight: 500,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

function XyflowDemoPage() {
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(new Set());

  const activeTree = useMemo(
    () => pruneTree(grammarTree, collapsedIds),
    [collapsedIds],
  );

  const computed = useMemo(() => treeToGraph(activeTree), [activeTree]);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(computed.nodes as Node[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(computed.edges);

  // 折叠状态变化时同步 nodes/edges（useNodesState/useEdgesState 只用到初始值）
  useEffect(() => {
    setNodes([...computed.nodes as Node[]]);
    setEdges([...computed.edges]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsedIds]);

  const newNodeIndexRef = useRef(0);
  const selectedNodeRef = useRef<string | null>(null);

  useOnSelectionChange({
    onChange: ({ nodes: selected }) => {
      selectedNodeRef.current = selected.length === 1 ? selected[0].id : null;
    },
  });

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((current) => addEdge({ ...connection, type: "smoothstep" }, current));
    },
    [setEdges],
  );

  const addChildNode = useCallback(() => {
    const parentId = selectedNodeRef.current;
    if (!parentId) return;

    const parent = nodes.find((n) => n.id === parentId);
    if (!parent) return;

    newNodeIndexRef.current += 1;
    const idx = newNodeIndexRef.current;
    const childId = `custom-${idx}`;

    const siblingCount = nodes.filter((n) =>
      edges.some((e) => e.source === parentId && e.target === n.id && n.id.startsWith("custom-"))
    ).length;

    const newNode = {
      id: childId,
      position: { x: parent.position.x + 300, y: parent.position.y + siblingCount * 70 },
      data: { label: `新节点 ${idx}`, type: "form", size: NODE_STYLE_MAP.form },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };

    setNodes((current) => [...current, newNode]);
    setEdges((current) => [
      ...current,
      { id: `${parentId}-${childId}`, source: parentId, target: childId, type: "smoothstep" },
    ]);
  }, [nodes, edges, setNodes, setEdges]);

  const handleNodeDoubleClick: import("@xyflow/react").NodeMouseHandler = useCallback(
    (_event, node) => {
      const nodeId = node.id;
      if (!PARENT_IDS.has(nodeId)) return;
      setCollapsedIds((prev) => {
        const next = new Set(prev);
        if (next.has(nodeId)) {
          next.delete(nodeId);
        } else {
          next.add(nodeId);
        }
        return next;
      });
    },
    [],
  );

  const styledNodes = useMemo(
    () =>
      nodes.map((n) => {
        const data = n.data as { size: { w: number; h: number }; type: string };
        const isCollapsed = collapsedIds.has(n.id);
        return {
          ...n,
          data: {
            ...n.data,
            label: isCollapsed
              ? `${(n.data as { label: string }).label}  [+]`
              : (n.data as { label: string }).label,
          },
          style: {
            width: data.size.w,
            height: data.size.h,
            ...TYPE_STYLES[data.type] ?? {},
            ...(isCollapsed
            ? ({
                borderStyle: "dashed" as const,
                borderColor: "#a1a1aa" as const,
              } satisfies React.CSSProperties)
            : {}),
          },
        };
      }),
    [nodes, collapsedIds],
  ) as Node[];

  return (
    <div className="flex h-[780px] flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white text-zinc-950">
      <header className="flex h-16 flex-none items-center justify-between border-b border-zinc-200 bg-white px-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            @xyflow/react · d3-hierarchy
          </p>
          <h1 className="mt-0.5 text-lg font-semibold tracking-normal">
            英语五大句型 · 语法知识树
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-500">
            <span className="font-medium text-zinc-700">{styledNodes.length}</span> nodes
            <span className="mx-1.5 text-zinc-300">/</span>
            <span className="font-medium text-zinc-700">{edges.length}</span> edges
          </span>
          <button
            type="button"
            onClick={addChildNode}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
          >
            <Plus className="size-3.5" />
            <span>添加子节点</span>
          </button>
          <button
            type="button"
            onClick={() => {
              document
                .querySelector<HTMLButtonElement>(".react-flow__controls-fitview")
                ?.click();
            }}
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
          >
            <Maximize2 className="size-3.5" />
            <span>适配画布</span>
          </button>
        </div>
      </header>

      <div className="relative min-h-0 flex-1 overflow-hidden bg-white">
        <ReactFlow
          nodes={styledNodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={handleNodeDoubleClick}
          fitView
          fitViewOptions={{ padding: 0.22 }}
          defaultEdgeOptions={{ type: "smoothstep" }}
          colorMode="light"
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#d4d4d8" />
          <MiniMap
            pannable
            zoomable
            className="!rounded-md !border !border-zinc-200 !bg-white"
            nodeColor={(node) => {
              const t = (node.data as { type: string }).type;
              if (t === "root") return "#18181b";
              if (t === "pattern") return "#bfdbfe";
              if (t === "component") return "#bbf7d0";
              if (t === "clause") return "#fde68a";
              return "#e4e4e7";
            }}
          />
          <Controls className="!border !border-zinc-200 !shadow-none" />
        </ReactFlow>
      </div>
    </div>
  );
}

export default function Wrapper() {
  return (
    <ReactFlowProvider>
      <XyflowDemoPage />
    </ReactFlowProvider>
  );
}
