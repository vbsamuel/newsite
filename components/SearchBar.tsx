'use client';

export default function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="relative block rounded-3xl border border-slate-300/90 bg-white/95 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-slate-300/80">
      <span className="sr-only">Search articles</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by topic, title, or keyword"
        className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
      />
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </span>
    </label>
  );
}
