import '@/styles/dist.css';
import React from 'react';
import AboutMe from '@/ui/AboutMe';
import Feed from '@/ui/Feed';
import { sampleEntries } from '@/lib/entries';
import CopyLink from '@/ui/CopyLink';

import { News_Cycle } from '@next/font/google';
import localFont from '@next/font/local';

const pragmataPro = localFont({
  src: './fonts/essentialpro.woff2',
  variable: '--font-pragmatapro'
});

const newsCycle = News_Cycle({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-newscycle'
});

export default function RootLayout() {
  return (
    <html>
      <head>
        <title>Bkase dev</title>
      </head>
      <body className={`${pragmataPro.variable} ${newsCycle.variable} font-friendly`}>
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
