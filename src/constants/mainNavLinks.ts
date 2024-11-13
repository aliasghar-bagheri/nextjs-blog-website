import { MAIN_PAGE_ROUTES } from '@/constants/routes';
import { T_NavLink } from '@/types';

export const mainNavLinks: T_NavLink[] = [
  {
    path: MAIN_PAGE_ROUTES.ROOT,
    label: 'Home',
  },
  {
    path: MAIN_PAGE_ROUTES.NEWS,
    label: 'News',
  },
  {
    path: MAIN_PAGE_ROUTES.PODCASTS,
    label: 'Podcasts',
  },
  {
    path: MAIN_PAGE_ROUTES.RESOURCES,
    label: 'Resources',
  },
];

export const footerNavLinks: { rootLabel: string; subRoot: T_NavLink[] }[] = [
  {
    rootLabel: 'Home',
    subRoot: [
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Feature',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.BLOGS,
        label: 'Blogs',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.RESOURCES,
        label: 'Resources',
        isNew: true,
      },
      {
        path: '/#',
        label: 'Testimobials',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.CONTACT_US,
        label: 'Contact Us',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Newsletter',
        isNew: false,
      },
    ],
  },
  {
    rootLabel: 'News',
    subRoot: [
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Trending Stories',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Featured Videos',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Technology',
        isNew: true,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Health',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Politics',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Environment',
        isNew: false,
      },
    ],
  },
  {
    rootLabel: 'Blogs',
    subRoot: [
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Quantum Computing',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'AI Ethics',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Space Exploration',
        isNew: true,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Biotechnology',
        isNew: true,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Renewable Energy',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'Biohacking',
        isNew: false,
      },
    ],
  },
  {
    rootLabel: 'Podcasts',
    subRoot: [
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'AI Revolution',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'AI Revolutions',
        isNew: false,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
        label: 'TechTalk AI',
        isNew: true,
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
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
        path: `${MAIN_PAGE_ROUTES.RESOURCES}?type=whitepapers`,
        label: 'Whitepapers',
      },
      {
        path: `${MAIN_PAGE_ROUTES.RESOURCES}?type=ebooks`,
        label: 'Ebooks',
      },
      {
        path: `${MAIN_PAGE_ROUTES.RESOURCES}?type=reports`,
        label: 'Reports',
      },
      {
        path: MAIN_PAGE_ROUTES.ROOT,
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
