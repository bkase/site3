import React from 'react';
import { Entry } from '../lib/entries';

export default function FeedItem({ entry }: { entry: Entry }) {
  const kindSpan = (() => {
    switch (entry.kind) {
      case 'blog': return <span>📃 Blog post</span>;
      case 'tweet': return <span>🧵 Twittter</span>;
    }
  })();
  return (
    <div>
      <div className="flex bg-whiteyellow py-4">
        <div className="relative h-64 w-64 shrink-0">
          <img className="absolute top-0 inline-block h-64 w-64 mr-4 rounded-lg" src={entry.imgUrl} />
          <div className="absolute top-0 bg-gradient-to-b from-navy rounded-lg h-full">
            <h2 className="inline-block p-3 text-4xl text-whiteyellow font-h1 uppercase">{entry.title}</h2>
            <h3 className="inline-block ml-3 text-2xl text-whiteyellow font-h1 uppercase">
              {kindSpan} | <span>{entry.date.toLocaleString(undefined, { month: "2-digit", day: "2-digit", year: "2-digit" })}</span></h3>
         </div>
        </div>
          <p className="text-2xl font-copy px-2 ml-2 leading-snug">
            {entry.summary}
          </p>
      </div>
    </div>
  )
}

