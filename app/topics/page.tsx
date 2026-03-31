import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { topics } from '@/lib/topics';
import { sortedArticles } from '@/lib/articles';

export const metadata = {
  title: 'Topics',
  description: 'Explore articles organized by research themes and technical domains.',
};

export default function TopicsPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Topics</p>
            <h1 className="text-4xl font-semibold text-slate-950">Organize writing by theme.</h1>
            <p className="text-lg leading-8 text-slate-600">
              Thoughtful editorial clusters for reading across architecture, systems practice, ML research, and leadership.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.slug} className="rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">{topic.title}</h2>
                  <p className="mt-3 text-slate-600">{topic.description}</p>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {topic.articles.length} articles
                </span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                {topic.articles.map((slug) => {
                  const article = sortedArticles.find((item) => item.slug === slug);
                  return (
                    article && (
                      <a key={slug} href={`/articles/${slug}`} className="block rounded-3xl border border-slate-200/80 bg-slate-50 p-5 transition hover:border-slate-300">
                        <p className="font-semibold text-slate-950">{article.title}</p>
                        <p className="mt-2 text-slate-600">{article.summary}</p>
                      </a>
                    )
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
