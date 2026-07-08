"use client";

import { useCallback } from "react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  Panel,
  ReactFlow,
  type Connection,
  type Edge,
  type Node,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Maximize2, Plus, RotateCcw } from "lucide-react";

const initialNodes: Node[] = [
  {
    id: "collect",
    type: "input",
    position: { x: 0, y: 80 },
    data: { label: "采集课文" },
    style: {
      width: 150,
      border: "1px solid #d4d4d8",
      borderRadius: 8,
      background: "#ffffff",
      color: "#18181b",
      fontWeight: 600,
    },
  },
  {
    id: "parse",
    position: { x: 230, y: 0 },
    data: { label: "解析结构" },
    style: {
      width: 150,
      border: "1px solid #cbd5e1",
      borderRadius: 8,
      background: "#f8fafc",
      color: "#18181b",
      fontWeight: 600,
    },
  },
  {
    id: "annotate",
    position: { x: 230, y: 160 },
    data: { label: "标注语法" },
    style: {
      width: 150,
      border: "1px solid #bfdbfe",
      borderRadius: 8,
      background: "#eff6ff",
      color: "#1f2937",
      fontWeight: 600,
    },
  },
  {
    id: "merge",
    position: { x: 460, y: 80 },
    data: { label: "合并笔记" },
    style: {
      width: 150,
      border: "1px solid #bbf7d0",
      borderRadius: 8,
      background: "#f0fdf4",
      color: "#1f2937",
      fontWeight: 600,
    },
  },
  {
    id: "preview",
    type: "output",
    position: { x: 690, y: 80 },
    data: { label: "页面预览" },
    style: {
      width: 150,
      border: "1px solid #fde68a",
      borderRadius: 8,
      background: "#fffbeb",
      color: "#1f2937",
      fontWeight: 600,
    },
  },
];

const initialEdges: Edge[] = [
  { id: "collect-parse", source: "collect", target: "parse", animated: true },
  { id: "collect-annotate", source: "collect", target: "annotate" },
  { id: "parse-merge", source: "parse", target: "merge" },
  { id: "annotate-merge", source: "annotate", target: "merge", animated: true },
  { id: "merge-preview", source: "merge", target: "preview" },
];

function createReviewNode(index: number): Node {
  return {
    id: `review-${index}`,
    position: { x: 460 + (index % 3) * 80, y: 260 + index * 16 },
    data: { label: `校对 ${index}` },
    style: {
      width: 132,
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      background: "#ffffff",
      color: "#3f3f46",
      fontWeight: 600,
    },
  };
}

export default function XyflowDemoPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) => addEdge({ ...connection, animated: true }, currentEdges));
    },
    [setEdges],
  );

  const resetGraph = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setEdges, setNodes]);

  const addReviewNode = useCallback(() => {
    setNodes((currentNodes) => {
      const nextIndex = currentNodes.filter((node) => node.id.startsWith("review-")).length + 1;
      const nextNode = createReviewNode(nextIndex);

      setEdges((currentEdges) => [
        ...currentEdges,
        {
          id: `merge-${nextNode.id}`,
          source: "merge",
          target: nextNode.id,
        },
      ]);

      return [...currentNodes, nextNode];
    });
  }, [setEdges, setNodes]);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-8 text-zinc-950">
      <section className="mx-auto flex h-[calc(100vh-4rem)] min-h-[680px] w-full max-w-7xl flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <header className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">@xyflow/react</p>
            <h1 className="mt-1 text-xl font-semibold tracking-normal">React Flow Demo</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={addReviewNode}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
            >
              <Plus className="size-4" />
              <span>新增节点</span>
            </button>
            <button
              type="button"
              onClick={resetGraph}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
            >
              <RotateCcw className="size-4" />
              <span>重置</span>
            </button>
          </div>
        </header>

        <div className="relative min-h-0 flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            fitViewOptions={{ padding: 0.18 }}
            colorMode="light"
            proOptions={{ hideAttribution: true }}
            className="bg-white"
          >
            <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#d4d4d8" />
            <MiniMap
              pannable
              zoomable
              className="!rounded-md !border !border-zinc-200 !bg-white"
              nodeColor={(node) => {
                if (node.id === "annotate") return "#bfdbfe";
                if (node.id === "merge") return "#bbf7d0";
                if (node.id === "preview") return "#fde68a";
                return "#e4e4e7";
              }}
            />
            <Controls className="!border !border-zinc-200 !shadow-none" />
            <Panel position="top-left" className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-500">
              <span className="font-medium text-zinc-700">{nodes.length}</span> nodes
              <span className="mx-2 text-zinc-300">/</span>
              <span className="font-medium text-zinc-700">{edges.length}</span> edges
            </Panel>
            <Panel position="bottom-left">
              <button
                type="button"
                onClick={() => {
                  document.querySelector<HTMLButtonElement>(".react-flow__controls-fitview")?.click();
                }}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
              >
                <Maximize2 className="size-4" />
                <span>适配画布</span>
              </button>
            </Panel>
          </ReactFlow>
        </div>
      </section>
    </main>
  );
}
