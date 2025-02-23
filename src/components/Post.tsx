import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERYResult } from "../../sanity.types";

interface PostProps {
  post: POST_QUERYResult;
}

export function Post({ post }: PostProps) {
 
  const { title, mainImage, body } = post || {};

  return (
    <main className="container mx-auto prose prose-lg p-4">
      {title && <h1>{title}</h1>}
      {mainImage?.asset?._ref && (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(mainImage.asset._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={title || ""}
        />
      )}
      {body && <PortableText value={body} />}
      <hr />
      <Link href="/">Bak t home</Link>
    </main>
  );
}