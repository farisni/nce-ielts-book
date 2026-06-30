import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NgArticle {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  articleParagraphs: string[];
  translationParagraphs: string[];
}

const DOC_DIR = path.join(process.cwd(), "doc");

function parseSection(content: string, heading: string): string[] {
  const regex = new RegExp(`## ${heading}\\s*\\n([\\s\\S]*?)(?=## |$)`, "i");
  const match = content.match(regex);
  if (!match) return [];
  return match[1]
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function getNgArticle(slug: string): NgArticle | null {
  const filePath = path.join(DOC_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const articleParagraphs = parseSection(content, "文章");
  const translationParagraphs = parseSection(content, "翻译");

  return {
    slug,
    title: data.title || "",
    subtitle: data.subtitle || "",
    author: data.author || "",
    articleParagraphs,
    translationParagraphs,
  };
}

export function listNgArticles(): NgArticle[] {
  if (!fs.existsSync(DOC_DIR)) return [];

  return fs
    .readdirSync(DOC_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const article = getNgArticle(slug);
      return article;
    })
    .filter(Boolean) as NgArticle[];
}
