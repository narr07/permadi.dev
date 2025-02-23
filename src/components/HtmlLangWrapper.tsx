// src/components/HtmlLangWrapper.tsx

'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export function HtmlLangWrapper({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
