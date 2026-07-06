import React from "react";

interface KnowledgePointProps {
  titleEn: string;
  titleCn?: string;
  underlineColor: string;
  children: React.ReactNode;
  className?: string;
}

export function KnowledgePoint({
  titleEn,
  titleCn,
  underlineColor,
  children,
  className,
}: KnowledgePointProps) {
  return (
    <div className={className}>
      <div
        className={`text-base font-semibold mb-4 pt-6 underline ${underlineColor} decoration-3 underline-offset-3`}
      >
        {titleEn}
        {titleCn && (
          <>
            {" "}
            <span className="font-normal text-gray-400 no-underline text-sm">
              {titleCn}
            </span>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
