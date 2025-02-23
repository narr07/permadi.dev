import {Link} from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { DarkMode } from './DarkMode';

export function Navbar() {
  const t = useTranslations('NavBar');

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">{t('home')}</Link>
        </li>
        <li>
          <Link href="/blog">{t('blog')}</Link>
        </li>
      </ul>
      <DarkMode />
    </nav>
  );
}
