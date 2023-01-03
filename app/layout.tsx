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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css" integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js" integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossOrigin="anonymous"></script>

        <meta name="description" content="Musings of Brandon Kase" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <link rel="icon" href="/static/icon/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/static/icon/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/static/icon/favicon-152.png" sizes="152x152" />
        <link rel="icon" href="/static/icon/favicon-167.png" sizes="167x167" />
        <link rel="icon" href="/static/icon/favicon-180.png" sizes="180x180" />
        <link rel="icon" href="/static/icon/favicon-192.png" sizes="192x192" />
        <link rel="icon" href="/static/icon/favicon-196.png" sizes="196x196" />
        <link
          rel="shortcut icon"
          sizes="196x196"
          href="/static/icon/favicon-196.png"
        />
        <link
          rel="apple-touch-icon"
          href="/static/icon/favicon-152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/static/icon/favicon-167.png"
          sizes="167x167"
        />
        <link
          rel="apple-touch-icon"
          href="/static/icon/favicon-180.png"
          sizes="180x180"
        />

      </head>
      <body className={`${pragmataPro.variable} ${newsCycle.variable} font-friendly md:px-8 lg:px-12`}>
        <div className="container mx-auto px-4 max-w-5xl">
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
