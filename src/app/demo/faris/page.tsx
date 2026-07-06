"use client";

const TABLE_DATA = [
  {
    expression: "bear-like animals",
    expressionCn: "像熊一样的动物",
    exampleEn: "Giant pandas are large, bear-like animals which are found in Sichuan province, China.",
    exampleCn: "熊猫是一种体形似熊的大动物，产于中国的四川。",
    highlight: "bear-like animals",
  },
  {
    expression: "lady-like behavior",
    expressionCn: "女性的行为",
    exampleEn: "The look was always lady-like and appropriately flaunty.",
    exampleCn: "这种装扮总是很淑女，奢华得恰到好处。",
    highlight: "lady-like",
  },
  {
    expression: "child-like simplicity",
    expressionCn: "童心般的简单",
    exampleEn: `Do you think you shall like Morton? She asked of me, with a direct and naive simplicity of tone and manner, pleasing, if child-like.`,
    exampleCn: `"你觉得会喜欢莫尔顿吗？"她问我，语调和举止里带着一种直率而幼稚的单纯，虽然有些孩子气，但讨人喜欢。`,
    highlight: "child-like",
  },
  {
    expression: "an angel-like girl",
    expressionCn: "天使般的女孩",
    exampleEn: "She is a lovely girl, with curl hair, baby skin, and smiles like an angel.",
    exampleCn: "她长得很可爱，卷卷的头发，婴儿的皮肤，天使的笑容(Like an Angel girl像天使的女孩)",
    highlight: "like an angel",
  },
  {
    expression: "dog-like animals",
    expressionCn: "像狗一样的动物",
    exampleEn: "Foxes and farmers have never got on well. These small dog-like animals have long been accused of killing farm animals.（CET-4）",
    exampleCn: "",
    highlight: "dog-like animals",
  },
  {
    expression: "crystal-like eyes",
    expressionCn: "明亮的双眸",
    exampleEn: "Few have got a pair of crystal eyes like his.",
    exampleCn: "很少有人像他那样生着一副水晶般的眼睛。",
    highlight: "crystal eyes like his",
  },
  {
    expression: "flu-like symptoms",
    expressionCn: "流感样症状",
    exampleEn: "Take them at the onset of cold or flu-like symptoms.",
    exampleCn: "出现感冒或类似流感症状时就服用。",
    highlight: "flu-like symptoms",
  },
  {
    expression: "cobweb-like",
    expressionCn: "蜘蛛网式的",
    exampleEn: "As is shown in the picture, there is a cobweb-like structure with separate compartments packed in it.",
    exampleCn: "",
    highlight: "cobweb-like structure",
  },
];

function highlightExample(text: string, word: string) {
  const idx = text.indexOf(word);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + word.length)}</mark>
      {text.slice(idx + word.length)}
    </>
  );
}

export default function FarisPage() {
  return (
    <main className="mx-auto mt-12 w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
      <div className="w-full">
        <table className="w-full border-collapse table-fixed text-black text-base">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 w-[30%]">表达</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 w-[70%]">例句</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((row, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="px-3 py-2 text-base align-top w-[30%] [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
                  <strong>{row.expression}</strong>
                  {row.expressionCn && (
                    <>
                      <br />
                      <span className="text-sm text-gray-400">{row.expressionCn}</span>
                    </>
                  )}
                </td>
                <td className="px-3 py-2 text-black text-base align-top w-[70%]">
                  {highlightExample(row.exampleEn, row.highlight)}
                  {row.exampleCn && (
                    <>
                      <br />
                      <span className="text-sm text-gray-400">{row.exampleCn}</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        main :global(mark) {
          background: linear-gradient(to top, rgba(73, 128, 177, 0.24) 42%, transparent 42%);
          color: #333;
          font-weight: 600;
          padding: 0 0.02em 0.02em;
        }
      `}</style>
    </main>
  );
}
