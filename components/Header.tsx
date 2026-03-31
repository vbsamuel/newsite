'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 border-b border-slate-200/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-slate-900">
          Amalgus
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-300/90 bg-white/90 p-2 text-slate-700 transition hover:border-slate-500 hover:text-slate-900 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200/80 bg-white/94 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-700">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-3 transition hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
