import '@/styles/dist.css';
import React from 'react';
import AboutMe from '@/ui/AboutMe';
import Feed from './Feed';
import Footer from '@/ui/Footer';

export default function RootLayout() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <title>Bkase dev</title>
      </head>
      <body className="bg-blue-300">
        <div className="container mx-auto px-2">
          <div className="">
            <AboutMe />
          </div>

          <div className="space-y-6">
            <Feed />
          </div>

          <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
            <Footer reactVersion="111" nextVersion="222" />
          </div>
        </div>
      </body>
    </html>
  );
}
