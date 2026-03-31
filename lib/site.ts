type NavHref = '/' | '/articles' | '/topics' | '/work' | '/about' | '/contact';

type NavItem = {
  label: string;
  href: NavHref;
};

export const site: {
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    mastodon: string;
  };
  nav: NavItem[];
} = {
  title: 'Amalgus Publication',
  description:
    'A thoughtful publishing platform for technical essays, systems research, and architecture perspectives.',
  url: 'https://www.amalgus.ai',
  author: 'Amalgus',
  email: 'hello@amalgus.ai',
  social: {
    github: 'https://github.com/amalgus',
    linkedin: 'https://www.linkedin.com/in/amalgus',
    mastodon: 'https://mastodon.social/@amalgus',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
    { label: 'Topics', href: '/topics' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
