declare module "highlight.js/lib/core" {
  import hljs from "highlight.js";
  export default hljs;
}

declare module "highlight.js/lib/languages/*" {
  import type { LanguageFn } from "highlight.js";
  const language: LanguageFn;
  export default language;
}

declare module "@hugeicons/core-free-icons/*" {
  const icon: unknown;
  export default icon;
}