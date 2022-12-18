import '@/styles/dist.css';
import React from 'react';
import AboutMe from '@/ui/AboutMe';
import Feed from '@/ui/Feed';
import { sampleEntries } from '@/lib/entries';
import CopyLink from '@/ui/CopyLink';

export default function RootLayout() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=News%20Cycle" />
        <title>Bkase dev</title>
      </head>
      <body className="">
        <div className="container mx-auto">
          <div className="">
            <AboutMe />
          </div>

          <div className="space-y-4">
            <h1 className="text-orange text-6xl font-friendly"> This site is under construction, go to <CopyLink href="https://bkase.dev">bkase.dev</CopyLink> for the old site.</h1>
          </div>

          <div className="space-y-6">
            <Feed entries={sampleEntries} />
          </div>
        </div>
      </body>
    </html>
  );
}
