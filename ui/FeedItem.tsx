import React from 'react';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';

export default function FeedItem({ post }: { post: Post }) {
  const kindSpan = (() => {
    switch ('blog') {
      case 'blog': return <span>📃 Blog post</span>;
      // case 'tweet': return <span>🧵 Twittter</span>;
    }
  })();
  return (
    <div>
      <div className="flex bg-whiteyellow py-4">
        <div className="relative h-64 w-64 shrink-0">
          <Image width={256} height={256} className="absolute top-0 inline-block mr-4 rounded-lg" alt="preview image" src={post.image} />
          <div className="absolute top-0 bg-gradient-to-b from-navy rounded-lg h-full">
            <h2 className="inline-block p-3 text-4xl text-whiteyellow font-h1 uppercase">{post.title}</h2>
            <h3 className="inline-block ml-3 text-2xl text-whiteyellow font-h1 uppercase">
              {kindSpan} | <span>{(new Date(post.date)).toLocaleString(undefined, { month: "2-digit", day: "2-digit", year: "2-digit" })}</span></h3>
         </div>
        </div>
          <p className="text-2xl font-copy px-2 ml-2 leading-snug text-navy">
            {post.summary}
          </p>
      </div>
    </div>
  )
}

