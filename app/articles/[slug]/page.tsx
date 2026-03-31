import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ReadingProgress from '@/components/ReadingProgress';
import TableOfContents from '@/components/TableOfContents';
import NewsletterCTA from '@/components/NewsletterCTA';
import ArticleInteraction from '@/components/ArticleInteraction';
import { getArticleBySlug, getArticleSource, getArticleToc, sortedArticles } from '@/lib/articles';
import { serializeMdx } from '@/lib/mdx';
import ArticleRenderer from '@/components/ArticleRenderer';
import { formatDate, readingTime } from '@/lib/utils';

export async function generateStaticParams() {
  return sortedArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: 'article',
      publishedTime: article.publishDate,
      images: [{ url: article.coverImage, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const toc = getArticleToc(params.slug);
  const related = sortedArticles.filter((item) => item.slug !== article.slug && item.topic === article.topic).slice(0, 2);
  const source = getArticleSource(params.slug);
  const mdxSource = await serializeMdx(source);

  return (
    <div className="min-h-screen overflow-hidden">
      <ReadingProgress />
      <Header />
      <main className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:px-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-10">
          <section className="space-y-6 rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{article.topic.replace(/-/g, ' ')}</p>
              <h1 className="text-4xl font-semibold text-slate-950">{article.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">{article.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>{formatDate(article.publishDate)}</span>
              <span>•</span>
              <span>{readingTime(article.readingTime)}</span>
              <span>•</span>
              <span>Updated {formatDate(article.updatedDate)}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/articles`}
                  className="rounded-full border border-slate-200/80 bg-slate-50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-600"
                >
                  {tag}
                </a>
              ))}
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
            <article className="prose prose-slate max-w-none rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
              <ArticleRenderer source={mdxSource} />
            </article>
            <aside className="space-y-8">
              <TableOfContents items={toc} />
              <div className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Share</p>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" className="block rounded-2xl bg-white px-4 py-3 transition hover:bg-slate-100">
                    Share on Twitter
                  </a>
                  <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(article.subtitle)}`} className="block rounded-2xl bg-white px-4 py-3 transition hover:bg-slate-100">
                    Share by email
                  </a>
                </div>
              </div>
            </aside>
          </section>

          <ArticleInteraction slug={article.slug} />

          <section className="grid gap-6 md:grid-cols-2">
            {related.map((relatedArticle) => (
              <article key={relatedArticle.slug} className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Related article</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  <a href={`/articles/${relatedArticle.slug}`}>{relatedArticle.title}</a>
                </h3>
                <p className="mt-3 text-slate-600">{relatedArticle.summary}</p>
              </article>
            ))}
          </section>

          <NewsletterCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
