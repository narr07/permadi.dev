import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  pathnames: {
    '/': '/',
    '/blog': {
      id: '/blog',
      en: '/blog',
    },
    '/blog/[slug]': {
      id: '/blog/[slug]',
      en: '/blog/[slug]',
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);