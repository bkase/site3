import React from 'react';
import { Entry } from 'lib/entries';
import FeedItem from './FeedItem';

export default function Feed({ entries }: { entries: Entry[] }) {
  return (
    <div className="py-8">
      <h1 className="inline-block text-7xl font-h1 uppercase mb-4 text-navy"> My musings </h1>
      <ul className="mt-4">
        {entries.map(entry => (
          <li className="mt-2">
            <FeedItem entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  )
}

