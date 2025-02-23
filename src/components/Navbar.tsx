import {Link} from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { DarkMode } from './DarkMode';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationLink from './NavigationLink';

export function Navbar() {
  const t = useTranslations('NavBar');

  return (
    <nav className='fixed top-2 w-full  z-50'>
    <div className=' flex  max-w-4xl rounded p-2 mx-auto bg-brand-200 ring-2 ring-brand-900 justify-between items-center  '>
      <div>
      <NavigationLink href="/">{t('home')}</NavigationLink>
      <NavigationLink href="/blog">{t('blog')}</NavigationLink>
      </div>
      <div className='flex space-x-4 items-center justify-center'>
      <DarkMode />
      <LanguageSwitcher />
      </div>
    </div>
    </nav>
  );
}
