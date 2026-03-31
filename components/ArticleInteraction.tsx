'use client';

import { useEffect, useMemo, useState } from 'react';

type ReactionKey = 'Insightful' | 'Practical' | 'Thought-provoking';

type Comment = {
  id: string;
  text: string;
  createdAt: string;
};

type InteractionData = {
  reactions: Record<ReactionKey, number>;
  comments: Comment[];
};

const reactionLabels: ReactionKey[] = ['Insightful', 'Practical', 'Thought-provoking'];

function storageKey(slug: string) {
  return `article-interactions-${slug}`;
}

function getInitialData(): InteractionData {
  return {
    reactions: {
      Insightful: 0,
      Practical: 0,
      'Thought-provoking': 0,
    },
    comments: [],
  };
}

export default function ArticleInteraction({ slug }: { slug: string }) {
  const [interactions, setInteractions] = useState<InteractionData | null>(null);
  const [commentText, setCommentText] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(storageKey(slug));
    setInteractions(stored ? JSON.parse(stored) : getInitialData());
  }, [slug]);

  const sortedComments = useMemo(() => {
    if (!interactions) return [];
    return [...interactions.comments].sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)));
  }, [interactions]);

  const updateStorage = (next: InteractionData) => {
    setInteractions(next);
    window.localStorage.setItem(storageKey(slug), JSON.stringify(next));
  };

  const handleReaction = (label: ReactionKey) => {
    if (!interactions) return;
    const next = {
      ...interactions,
      reactions: {
        ...interactions.reactions,
        [label]: interactions.reactions[label] + 1,
      },
    };
    updateStorage(next);
    setFeedback(`Thanks for marking this article ${label.toLowerCase()}.`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentText.trim() || !interactions) return;

    const next: InteractionData = {
      ...interactions,
      comments: [
        {
          id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          text: commentText.trim(),
          createdAt: new Date().toISOString(),
        },
        ...interactions.comments,
      ],
    };

    updateStorage(next);
    setCommentText('');
    setFeedback('Your comment has been added locally.');
  };

  if (!interactions) {
    return (
      <section className="rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
        <p className="text-slate-600">Loading interaction tools…</p>
      </section>
    );
  }

  return (
    <section className="rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Reader interaction</h2>
          <p className="mt-3 text-slate-600">React, comment, and help signal the most useful ideas.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {reactionLabels.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handleReaction(label)}
              className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <span className="block text-base">{label}</span>
              <span className="mt-2 text-xs text-slate-500">{interactions.reactions[label]} reaction{interactions.reactions[label] === 1 ? '' : 's'}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="article-comment" className="text-sm font-semibold text-slate-900">
            Leave a comment
          </label>
          <textarea
            id="article-comment"
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-4 text-slate-700 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
            rows={5}
            placeholder="Share a perspective or highlight a passage that mattered to you."
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">Comments are stored locally in your browser.</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-3xl bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Post comment
            </button>
          </div>
          {feedback ? <p className="text-sm text-forest">{feedback}</p> : null}
        </form>

        <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-900">Recent comments</p>
          {sortedComments.length === 0 ? (
            <p className="text-sm text-slate-600">Be the first to respond to this article.</p>
          ) : (
            <div className="space-y-4">
              {sortedComments.slice(0, 4).map((comment) => (
                <div key={comment.id} className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-700">{comment.text}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">{new Date(comment.createdAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
