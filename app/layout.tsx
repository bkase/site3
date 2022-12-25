import '@/styles/dist.css';
import React from 'react';
import AboutMe from '@/ui/AboutMe';
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

import "@code-hike/mdx/dist/index.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Bkase dev</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css" integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js" integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossOrigin="anonymous" />

        <meta name="description" content="Musings of Brandon Kase" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bkase.io" />

      </head>
      <body className={`${pragmataPro.variable} ${newsCycle.variable} font-friendly`}>
        <div className="container mx-auto px-4">
          <div className="">
            <AboutMe />
          </div>

          <div className="space-y-4">
            <h1 className="text-orange text-2xl font-friendly"> This site is under construction, go to <CopyLink href="https://bkase.dev">bkase.dev</CopyLink> for the old site.</h1>
          </div>

          <div className="space-y-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
