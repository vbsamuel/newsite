'use client';

import Link from 'next/link';
import type { Article } from '@/lib/articles';
import { formatDate, readingTime } from '@/lib/utils';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
        <span>{formatDate(article.publishDate)}</span>
        <span aria-hidden="true">·</span>
        <span>{readingTime(article.readingTime)}</span>
      </div>
      <h2 className="text-2xl font-semibold text-slate-950 transition group-hover:text-slate-800">
        <Link href={`/articles/${article.slug}` as any}>{article.title}</Link>
      </h2>
      <p className="mt-4 text-slate-600">{article.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs text-slate-700">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/articles/${article.slug}` as any}
        className="mt-8 inline-flex text-sm font-semibold text-slate-900 transition hover:text-forest"
      >
        Read essay →
      </Link>
    </article>
  );
}
