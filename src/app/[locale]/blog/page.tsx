// src/app/[locale]/(blog)/page.tsx

import { Posts } from "@/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";
 


export default async function BlogPage({
  params: paramsPromise
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await paramsPromise;
  const isDraftMode = (await draftMode()).isEnabled;

  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
    params: { language: locale },
    tags: ['post'],
  });

  return (
    <>
       
      <Posts posts={posts} />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }];
}
