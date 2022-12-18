import Link from "next/link";
import React from 'react';

export default function CopyLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link className="text-green underline hover:no-underline underline-offset-4" href={href}>{children}</Link>
  );
}
