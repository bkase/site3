import '@/styles/dist.css';
import React from 'react';
import AboutMe from '@/ui/AboutMe';
import CopyLink from '@/ui/CopyLink';

import { News_Cycle } from '@next/font/google';
import localFont from '@next/font/local';

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
import "@/styles/ch-overrides.css"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>bkase.dev</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css" integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js" integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossOrigin="anonymous" />

        <meta name="description" content="Musings of Brandon Kase" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="bkase.dev" />
        <meta property="og:url" content="https://bkase.io" />
        <meta property="og:image" content="https://bkase.io/brandon-jacket.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bkase.io" />
        <meta property="twitter:url" content="https://bkase.io" />
        <meta name="twitter:title" content="bkase.dev" />
        <meta name="twitter:description" content="Musings of Brandon Kase" />
        <meta name="twitter:image" content="https://bkase.io/brandon-jacket.jpeg" />

      </head>
      <body className={`${pragmataPro.variable} ${newsCycle.variable} font-friendly`}>
        <div className="container mx-auto px-4">
          <div className="">
            <AboutMe />
          </div>

          <div className="space-y-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
