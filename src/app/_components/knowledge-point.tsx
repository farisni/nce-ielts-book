import React from "react";

interface KnowledgePointProps {
  titleEn: string;
  titleCn?: string;
  children: React.ReactNode;
  className?: string;
}

export function KnowledgePoint({
  titleEn,
  titleCn,
  children,
  className,
}: KnowledgePointProps) {
  return (
    <div className={className}>
      <div className="mb-5 pt-6 text-base font-semibold text-zinc-950">
        <span
          className="inline border-b border-[#9fcddd] px-0.5 pb-0.5"
          style={{
            background:
              "linear-gradient(to top, rgba(125, 211, 252, 0.22) 44%, transparent 44%)",
          }}
        >
          {titleEn}
        </span>
        {titleCn && (
          <>
            {" "}
            <span className="ml-1 font-normal text-gray-400 text-sm">
              {titleCn}
            </span>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
