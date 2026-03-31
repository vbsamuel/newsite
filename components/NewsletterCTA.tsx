'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-8 text-white shadow-soft">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Newsletter</p>
        <h2 className="text-3xl font-semibold">Subscribe for thoughtful technical analysis.</h2>
        <p className="max-w-2xl text-slate-300">
          Receive short essays, research reflections, and systems commentary curated for engineering leaders.
        </p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          setEmail('');
        }}
        className="mt-8 flex flex-col gap-4 sm:flex-row"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="w-full rounded-3xl border border-slate-700/90 bg-slate-900/95 px-5 py-4 text-white placeholder:text-slate-500 focus:border-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-3xl bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          {submitted ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
      {submitted ? <p className="mt-4 text-sm text-slate-300">Thanks — I’ll reach out with the next note soon.</p> : null}
    </section>
  );
}
