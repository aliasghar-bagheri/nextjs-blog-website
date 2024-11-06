import { T_NavLink } from '@/types';

export const mainNavLinks: T_NavLink[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/news',
    label: 'News',
  },
  {
    path: '/podcasts',
    label: 'Podcasts',
  },
  {
    path: '/resources',
    label: 'Resources',
  },
];

export const footerNavLinks: { rootLabel: string; subRoot: T_NavLink[] }[] = [
  {
    rootLabel: 'Home',
    subRoot: [
      {
        path: '/',
        label: 'Feature',
        isNew: false,
      },
      {
        path: '/blogs',
        label: 'Blogs',
        isNew: false,
      },
      {
        path: '/resources',
        label: 'Resources',
        isNew: true,
      },
      {
        path: '/#',
        label: 'Testimobials',
        isNew: false,
      },
      {
        path: '/contact-us',
        label: 'Contact Us',
        isNew: false,
      },
      {
        path: '/',
        label: 'Newsletter',
        isNew: false,
      },
    ],
  },
  {
    rootLabel: 'News',
    subRoot: [
      {
        path: '/',
        label: 'Trending Stories',
        isNew: false,
      },
      {
        path: '/',
        label: 'Featured Videos',
        isNew: false,
      },
      {
        path: '/',
        label: 'Technology',
        isNew: true,
      },
      {
        path: '/',
        label: 'Health',
        isNew: false,
      },
      {
        path: '/',
        label: 'Politics',
        isNew: false,
      },
      {
        path: '/',
        label: 'Environment',
        isNew: false,
      },
    ],
  },
  {
    rootLabel: 'Blogs',
    subRoot: [
      {
        path: '/',
        label: 'Quantum Computing',
        isNew: false,
      },
      {
        path: '/',
        label: 'AI Ethics',
        isNew: false,
      },
      {
        path: '/',
        label: 'Space Exploration',
        isNew: true,
      },
      {
        path: '/',
        label: 'Biotechnology',
        isNew: true,
      },
      {
        path: '/',
        label: 'Renewable Energy',
        isNew: false,
      },
      {
        path: '/',
        label: 'Biohacking',
        isNew: false,
      },
    ],
  },
  {
    rootLabel: 'Podcasts',
    subRoot: [
      {
        path: '/',
        label: 'AI Revolution',
        isNew: false,
      },
      {
        path: '/',
        label: 'AI Revolutions',
        isNew: false,
      },
      {
        path: '/',
        label: 'TechTalk AI',
        isNew: true,
      },
      {
        path: '/',
        label: 'AI Convesations',
        isNew: true,
      },
    ],
  },
];

export const footerResourceLinks: { rootLabel: string; subRoot: T_NavLink[] }[] = [
  {
    rootLabel: 'Resources',
    subRoot: [
      {
        path: '/resources?type=whitepapers',
        label: 'Whitepapers',
      },
      {
        path: '/resources?type=ebooks',
        label: 'Ebooks',
      },
      {
        path: '/resources?type=reports',
        label: 'Reports',
      },
      {
        path: '/',
        label: 'Reserch Papers',
      },
    ],
  },
];

export const socialLinks: T_NavLink[] = [
  {
    icon: '/assets/icons/twitter.svg',
    path: 'https://twitter.com',
    label: 'twitter',
  },
  {
    icon: '/assets/icons/linkedin.svg',
    path: 'http://linkedin.com',
    label: 'linkedin',
  },
  {
    icon: '/assets/icons/medium.svg',
    path: 'https://medium.com',
    label: 'medium',
  },
];
