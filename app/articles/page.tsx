import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ArticlesExplorer from '@/components/ArticlesExplorer';
import { sortedArticles } from '@/lib/articles';

export const metadata = {
  title: 'Articles',
  description: 'Search, filter, and browse the full collection of technical essays and research commentary.',
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Articles</p>
            <h1 className="text-4xl font-semibold text-slate-950">Browse all technical writing.</h1>
            <p className="text-lg leading-8 text-slate-600">
              A curated publication platform for essays, architecture analysis, and research notes organized for deep engagement.
            </p>
          </div>
        </section>
        <ArticlesExplorer articles={sortedArticles} />
      </main>
      <Footer />
    </div>
  );
}
