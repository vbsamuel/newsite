export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  publishDate: string;
  updatedDate: string;
  tags: string[];
  topic: string;
  featured: boolean;
  readingTime: number;
  coverImage: string;
};

export const articles: Article[] = [
  {
    slug: 'the-disciplinary-value-of-observability',
    title: 'The Disciplinary Value of Observability',
    subtitle: 'Why resilient systems require a practice as much as a control plane.',
    summary:
      'An exploration of observability as a core engineering discipline and the mindset needed to turn signal into better outcomes.',
    publishDate: '2026-03-14',
    updatedDate: '2026-03-18',
    tags: ['observability', 'architecture', 'systems'],
    topic: 'systems-architecture',
    featured: true,
    readingTime: 9,
    coverImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'soft-boundaries-in-distributed-systems',
    title: 'Soft Boundaries in Distributed Systems',
    subtitle: 'Maintaining coherence while preserving adaptability in complex infrastructure.',
    summary:
      'A practical essay on how soft boundaries help teams move faster without losing system stability.',
    publishDate: '2026-02-27',
    updatedDate: '2026-03-01',
    tags: ['distributed systems', 'design', 'platform'],
    topic: 'systems-architecture',
    featured: false,
    readingTime: 11,
    coverImage:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'modelless-data-pipelines',
    title: 'Modelless Data Pipelines',
    subtitle: 'A practical approach for research teams working with evolving inference assets.',
    summary:
      'How to design data flow for experimentation, model evaluation, and responsible deployment without over-engineering the platform.',
    publishDate: '2026-01-17',
    updatedDate: '2026-01-24',
    tags: ['machine learning', 'data', 'research'],
    topic: 'machine-learning',
    featured: false,
    readingTime: 12,
    coverImage:
      'https://images.unsplash.com/photo-1531497865142-0f329a7a77a8?auto=format&fit=crop&w=1200&q=80',
  },
];
