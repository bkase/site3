import React from 'react';
import { Post } from 'contentlayer2/generated';
import Image from 'next/image';
import Link from 'next/link';

export default function FeedItem({ post }: { post: Post }) {
  const kindSpan = (() => {
    switch ('blog') {
      case 'blog': return <span>📃 Blog post</span>;
      // case 'tweet': return <span>🧵 Twittter</span>;
    }
  })();
  return (
    <div>
      <Link href={post.slug} className="flex bg-whiteyellow py-2 md:py-4 lg:py-6">
        <div className="relative h-32 w-32 md:h-48 md:w-48 lg:h-72 lg:w-72 shrink-0 md:ml-2 lg:ml-4">
          <Image width={384} height={384} className="absolute top-0 inline-block rounded-lg" alt="preview image" src={post.image} />
          <div className="absolute top-0 bg-gradient-to-b from-navy rounded-lg h-full w-full">
            <h2 className="inline-block p-1.5 text-xl md:text-2xl lg:text-3xl leading-tight text-whiteyellow font-h1 uppercase">{post.title.replace(/ (?=\S+$)/, '\u00a0')}</h2>
            <h3 className="block ml-1.5 text-xs md:text-sm lg:text-lg text-whiteyellow font-h1 uppercase">
              {kindSpan} | <span>{(new Date(post.date)).toLocaleString(undefined, { month: "2-digit", day: "2-digit", year: "2-digit" })}</span></h3>
         </div>
        </div>
        <p className="font-copy text-sm md:text-lg lg:text-xl px-3 md:px-5 lg:px-7 leading-snug md:leading-normal lg:leading-loose text-navy">
            {post.summary}
          </p>
      </Link>
    </div>
  )
}

