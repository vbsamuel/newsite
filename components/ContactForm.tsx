'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
        setMessage('');
      }}
      className="rounded-[2rem] border border-slate-200/90 bg-white/90 p-8 shadow-soft"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Speak with me</p>
        <h2 className="text-3xl font-semibold text-slate-950">Let’s discuss research, architecture, or collaboration.</h2>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-700">
          Name
          <input type="text" placeholder="Your name" className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 focus:outline-none" />
        </label>
        <label className="grid gap-2 text-sm text-slate-700">
          Email
          <input type="email" placeholder="you@example.com" className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 focus:outline-none" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm text-slate-700">
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          placeholder="Your inquiry, research idea, or speaking proposal"
          className="min-h-[170px] rounded-3xl border border-slate-300 bg-slate-50 px-4 py-4 focus:outline-none"
        />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">Available for research collaboration, speaking, and advisory work.</p>
        <button type="submit" className="inline-flex rounded-3xl bg-forest px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
          {sent ? 'Message queued' : 'Send message'}
        </button>
      </div>
      {sent ? <p className="mt-4 text-sm text-forest">Your message is ready. I’ll follow up by email soon.</p> : null}
    </form>
  );
}
