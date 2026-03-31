export type Topic = {
  slug: string;
  title: string;
  description: string;
  color: string;
  articles: string[];
};

export const topics: Topic[] = [
  {
    slug: 'systems-architecture',
    title: 'Systems Architecture',
    description:
      'Deep structural thinking for resilient services, data flow, and operational architecture in modern systems.',
    color: 'forest',
    articles: ['the-disciplinary-value-of-observability', 'soft-boundaries-in-distributed-systems'],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    description:
      'Research notes and analysis on inference systems, model strategy, and reliability in production ML.',
    color: 'sky',
    articles: ['modelless-data-pipelines'],
  },
  {
    slug: 'technical-leadership',
    title: 'Technical Leadership',
    description:
      'Thoughtful leadership perspectives for shaping engineering teams, decision frameworks, and technical culture.',
    color: 'ember',
    articles: ['the-disciplinary-value-of-observability'],
  },
  {
    slug: 'research-notes',
    title: 'Research Notes',
    description:
      'Curated commentary on emerging systems design, governance, and the future of complex engineering practice.',
    color: 'moss',
    articles: ['soft-boundaries-in-distributed-systems', 'modelless-data-pipelines'],
  },
];
