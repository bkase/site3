import React from 'react';
import { Post } from 'contentlayer/generated';
import FeedItem from './FeedItem';

export default function Feed({ posts }: { posts: Post[] }) {
  return (
    <div className="py-8">
      <h1 className="inline-block text-5xl font-h1 uppercase mb-4 text-navy"> My musings </h1>
      <ul className="mt-4">
        {posts.map((post, i) => (
          <li className="mt-2" key={i}>
            <FeedItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}

