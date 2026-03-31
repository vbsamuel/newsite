import { site } from '@/lib/site';
import { sortedArticles } from '@/lib/articles';

export default function sitemap() {
  const pages = ['', 'about', 'articles', 'topics', 'work', 'contact'];

  return [
    {
      url: site.url,
      lastModified: new Date().toISOString(),
    },
    ...pages.map((page) => ({
      url: `${site.url}/${page}`.replace(/\/$/, ''),
      lastModified: new Date().toISOString(),
    })),
    ...sortedArticles.map((article) => ({
      url: `${site.url}/articles/${article.slug}`,
      lastModified: article.updatedDate,
    })),
  ];
}
