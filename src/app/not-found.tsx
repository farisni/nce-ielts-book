import { NotFoundGlitch } from "@/components/motion/not-found/glitch";

export default function NotFoundPage() {
  return (
    <NotFoundGlitch
      browseHref="/ielts"
      browseLabel="去学习"
      homeHref="/"
      homeLabel="回首页"
      title="页面未找到"
      description="你访问的页面可能已被移动、删除，或从未存在过。"
    />
  );
}
