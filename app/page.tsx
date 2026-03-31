import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TopicBadge from '@/components/TopicBadge';
import { featuredArticles, sortedArticles } from '@/lib/articles';
import { topics } from '@/lib/topics';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-amber-200/90 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-700">
              Author-led publication
            </p>
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Technical essays and systems research for architecture-led engineering.
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Deep writing on distributed systems, machine learning, and leadership practice with a calm, editorial perspective designed for serious readers.
              </p>
            </div>
            <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Featured work</p>
                <p className="mt-4 text-slate-700">Research commentary, architecture frameworks, and systems thinking to strengthen enterprise engineering decisions.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Audience</p>
                <p className="mt-4 text-slate-700">Technical leaders, architects, researchers, and engineering teams who value clarity, credibility, and strategy.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(214,233,233,0.35),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.76),rgba(246,240,230,0.92))] p-8 shadow-soft">
            <div className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About the author</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                An experienced systems architect, researcher, and engineering leader writing practical essays on the intersection of technology, governance, and organizational resilience.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p>Enterprise architecture.</p>
                <p>Model-aware systems design.</p>
                <p>Research-driven product operations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Featured essays</p>
            <h2 className="text-3xl font-semibold text-slate-950">Recent long-form writing.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.65fr]">
          <div className="space-y-7 rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Topic clusters</p>
              <h2 className="text-3xl font-semibold text-slate-950">Intentional coverage for disciplined readers.</h2>
            </div>
            <div className="grid gap-4">
              {topics.map((topic) => (
                <a
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-white"
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{topic.title}</p>
                  <p className="mt-3 text-slate-700">{topic.description}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-8 rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,248,0.95),rgba(241,232,224,0.92))] p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Recent writing</p>
            <div className="space-y-5">
              {sortedArticles.slice(0, 3).map((article) => (
                <article key={article.slug} className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">{article.title}</p>
                  <p className="mt-3 text-slate-600">{article.summary}</p>
                  <a href={`/articles/${article.slug}`} className="mt-4 inline-flex text-sm font-semibold text-forest">
                    Read more →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
