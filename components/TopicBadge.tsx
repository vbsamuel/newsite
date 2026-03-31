'use client';

import Link from 'next/link';

const tones: Record<string, string> = {
  'systems-architecture': 'bg-forest/10 text-forest border-forest/20',
  'machine-learning': 'bg-sky/10 text-sky border-sky/20',
  'technical-leadership': 'bg-ember/10 text-ember border-ember/20',
  'research-notes': 'bg-moss/10 text-moss border-moss/20',
};

export default function TopicBadge({ topic, label }: { topic: string; label: string }) {
  return (
    <Link
      href={`/topics/${topic}` as any}
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold transition ${tones[topic] ?? 'border-slate-200 bg-slate-100 text-slate-700'}`}
    >
      {label}
    </Link>
  );
}
