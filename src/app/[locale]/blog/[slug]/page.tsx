import { notFound } from 'next/navigation';
import { POST_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/components/Post";

export default async function PostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;

  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug, language: locale },
  });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Post post={post} />
    </div>
  );
}
