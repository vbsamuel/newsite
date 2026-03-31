import fs from 'fs';
import path from 'path';
import { toSlug } from './utils';
import type { Article } from './articleData';
import { articles } from './articleData';

export type { Article } from './articleData';

export const sortedArticles = [...articles].sort(
  (a, b) => Number(new Date(b.publishDate)) - Number(new Date(a.publishDate))
);

export const featuredArticles = articles.filter((article) => article.featured);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleSource(slug: string) {
  const articlePath = path.join(process.cwd(), 'content', 'articles', `${slug}.mdx`);
  return fs.readFileSync(articlePath, 'utf-8');
}

export type TocItem = {
  id: string;
  title: string;
  level: number;
};

export function getArticleToc(slug: string): TocItem[] {
  const articlePath = path.join(process.cwd(), 'content', 'articles', `${slug}.mdx`);
  const source = fs.readFileSync(articlePath, 'utf-8');
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  const headings: TocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    headings.push({
      id: toSlug(title),
      title,
      level,
    });
  }

  return headings;
}
