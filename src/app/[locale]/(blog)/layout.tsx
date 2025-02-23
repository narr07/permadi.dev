// src/app/[locale]/(blog)/layout.tsx

import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { HtmlLangWrapper } from '@/components/HtmlLangWrapper';

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale as any);

  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <HtmlLangWrapper>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <div className="bg-white min-h-screen max-w-4xl mx-auto">
          {children}
          <SanityLive />
          {isDraftMode && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
        </div>
      </NextIntlClientProvider>
    </HtmlLangWrapper>
  );
}