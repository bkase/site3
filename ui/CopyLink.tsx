import Link from "next/link";
import React from 'react';

export default function CopyLink({ href, children }: { href: string | undefined, children: React.ReactNode }) {
  const className = "text-green underline hover:no-underline underline-offset-4";
  if (href && href.startsWith('/')) {
    return (
       <Link className={className} href={href}>{children}</Link>
     );
  } else {
    return (
      <a className={className} href={href}>{children}</a>
    );
  }
}
