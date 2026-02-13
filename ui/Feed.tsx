import React from 'react';
import { Post } from 'contentlayer2/generated';
import FeedItem from './FeedItem';

export default function Feed({ posts }: { posts: Post[] }) {
  return (
    <div className="py-8">
      <h1 className="inline-block text-5xl md:text-6xl lg:text-7xl font-h1 uppercase mb-4 md:mb-6 lg:mb-8 text-navy"> My musings </h1>
      <ul className="mt-4 md:mt-6 lg:mt-8">
        {posts.map((post, i) => (
          <li className="mt-4 md:mt-6 lg:mt-8" key={i}>
            <FeedItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}

