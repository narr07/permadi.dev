// src/components/Posts.tsx
import {Link} from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { POSTS_QUERYResult } from "../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
 

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {posts.map((post) => (
      <div className="flex flex-col gap-2" key={post._id}>
        <Link
        href={`/blog/${post?.slug?.current}`}
        className="cardHover px-2 py-1.5 sm:px-4 overflow-hidden bg-brand-100 dark:bg-brand-950 divide-y divide-brand-200 dark:divide-brand-800 ring-2 ring-brand-800 rounded dark:ring-brand-800 shadow"
        >
        {post?.title}
        </Link>
      </div>
      ))}
    </div>
  );
}