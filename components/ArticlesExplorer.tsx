'use client';

import { useMemo, useState } from 'react';
import type { Article } from '@/lib/articles';
import ArticleCard from './ArticleCard';
import SearchBar from './SearchBar';

const sortOptions = [
  { label: 'Newest first', key: 'newest' },
  { label: 'Oldest first', key: 'oldest' },
];

export default function ArticlesExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [sortKey, setSortKey] = useState<'newest' | 'oldest'>('newest');

  const tags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort();

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();
    return [...articles]
      .filter((article) => {
        const matchesQuery = [article.title, article.summary, ...article.tags].some((value) =>
          value.toLowerCase().includes(normalizedQuery)
        );
        const matchesTag = filterTag ? article.tags.includes(filterTag) : true;
        return matchesQuery && matchesTag;
      })
      .sort((a, b) => {
        if (sortKey === 'newest') return Number(new Date(b.publishDate)) - Number(new Date(a.publishDate));
        return Number(new Date(a.publishDate)) - Number(new Date(b.publishDate));
      });
  }, [articles, filterTag, query, sortKey]);

  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-950">Browse the archive</h2>
          <p className="max-w-2xl text-slate-600">
            Search and filter long-form essays, technical notes, and research commentary across domains and disciplines.
          </p>
        </div>
        <div className="grid gap-4 rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
          <SearchBar value={query} onChange={setQuery} />
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setFilterTag('')}
              className={`rounded-full border px-4 py-2 text-sm transition ${filterTag === '' ? 'border-forest bg-forest/10 text-forest' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
            >
              All tags
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilterTag(tag)}
                className={`rounded-full border px-4 py-2 text-sm transition ${filterTag === tag ? 'border-forest bg-forest/10 text-forest' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span>Sort</span>
            {sortOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setSortKey(option.key as 'newest' | 'oldest')}
                className={`rounded-full px-4 py-2 transition ${sortKey === option.key ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {filteredArticles.length === 0 ? (
        <p className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-slate-700 shadow-soft">
          No articles match your search. Try a broader topic or a different keyword.
        </p>
      ) : null}
    </section>
  );
}
