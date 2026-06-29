"use client";

import { useState, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Skeleton } from "@/components/ui/skeleton";

const cards = [
  {
    id: 1, content: <div><p className="font-bold md:text-4xl text-xl text-white">课文列表</p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">NCE 课文概览与学习进度，涵盖 NCE2/3/4 全部课文。</p></div>,
    className: "md:col-span-2", thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 2, content: <div><p className="font-bold md:text-4xl text-xl text-white">词汇学习</p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">核心词汇卡片与释义，雅思词汇真经 + 538 考点词。</p></div>,
    className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 3, content: <div><p className="font-bold md:text-4xl text-xl text-white">练习与测试</p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">课后练习与阶段测试，巩固所学知识。</p></div>,
    className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4, content: <div><p className="font-bold md:text-4xl text-xl text-white">语法专题</p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">重点语法知识点归纳与详解。</p></div>,
    className: "md:col-span-2", thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 5, content: <div><p className="font-bold md:text-4xl text-xl text-white">听力训练</p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">课文音频与听写练习，提升听力水平。</p></div>,
    className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 6, content: <div><p className="font-bold md:text-4xl text-xl text-white">写作模板</p><p className="font-normal text-base my-4 max-w-lg text-neutral-200">范文结构与常用句型，助你轻松写作。</p></div>,
    className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3540&auto=format&fit=crop",
  },
];

function SkeletonGrid() {
  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {/* row 1: col-span-2 */}
      <div className="md:col-span-2 rounded-xl overflow-hidden bg-gray-100">
        <Skeleton className="w-full aspect-[4/3]" />
      </div>
      {/* row 1: col-span-1 */}
      <div className="col-span-1 rounded-xl overflow-hidden bg-gray-100">
        <Skeleton className="w-full aspect-[4/3]" />
      </div>
      {/* row 2: col-span-1 */}
      <div className="col-span-1 rounded-xl overflow-hidden bg-gray-100">
        <Skeleton className="w-full aspect-[4/3]" />
      </div>
      {/* row 2: col-span-2 */}
      <div className="md:col-span-2 rounded-xl overflow-hidden bg-gray-100">
        <Skeleton className="w-full aspect-[4/3]" />
      </div>
      {/* row 3: col-span-1 */}
      <div className="col-span-1 rounded-xl overflow-hidden bg-gray-100">
        <Skeleton className="w-full aspect-[4/3]" />
      </div>
      {/* row 3: col-span-1 */}
      <div className="col-span-1 rounded-xl overflow-hidden bg-gray-100">
        <Skeleton className="w-full aspect-[4/3]" />
      </div>
    </div>
  );
}

export function HomeClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="h-[900px] rounded-md pl-4 pt-4 pb-4 pr-[56px]">
        {ready ? <LayoutGrid cards={cards} /> : <SkeletonGrid />}
      </div>
    </div>
  );
}
