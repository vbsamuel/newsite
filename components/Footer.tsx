'use client';

import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Amalgus Publication</p>
          <p className="mt-4 text-slate-700">
            Principled technical writing, research commentary, and systems thinking for enterprise engineering leaders.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Sections</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {site.nav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href={site.social.github} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                  GitHub
                </a>
              </li>
              <li>
                <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-slate-900">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
