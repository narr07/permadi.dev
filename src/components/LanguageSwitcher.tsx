// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState('id');

  useEffect(() => {
    setLang(pathname.startsWith('/en') ? 'en' : 'id');
  }, [pathname]);

  const handleChangeLanguage = (newLang: string) => {
    setLang(newLang);
    
    let newPath;
    if (newLang === 'id') {
      // Jika bahasa baru adalah Indonesia
      newPath = pathname.startsWith('/en') ? pathname.replace(/^\/en/, '/id') : pathname;
    } else {
      // Jika bahasa baru adalah Inggris
      newPath = pathname.startsWith('/id') ? pathname.replace(/^\/id/, '/en') : `/en${pathname}`;
    }

    // Jika newPath masih kosong atau hanya '/', arahkan ke '/id' atau '/en'
    if (newPath === '' || newPath === '/') {
      newPath = `/${newLang}`;
    }

    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('id')} disabled={lang === 'id'}>Indonesia</button>
      <button onClick={() => handleChangeLanguage('en')} disabled={lang === 'en'}>English</button>
    </div>
  );
}