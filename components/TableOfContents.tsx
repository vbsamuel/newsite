'use client';

import Link from 'next/link';

type TocItem = {
  id: string;
  title: string;
  level: number;
};

export default function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <aside className="sticky top-24 hidden shrink-0 self-start rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-soft lg:block">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">In this article</p>
      <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <div key={item.id} className={`transition hover:text-slate-900 ${item.level === 3 ? 'pl-4 text-slate-600' : ''}`}>
            <Link href={`#${item.id}`}>{item.title}</Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
