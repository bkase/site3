'use client';

import { useRef, useEffect } from 'react';

/** Requires katex-auto-render in scope */
export default function Katex({ children }: { children: React.ReactNode }) {
    const r = useRef<HTMLSpanElement>(null);
    useEffect(() =>
      (window as any).renderMathInElement(r.current, {
          // customised options
          // • auto-render specific keys, e.g.:
          delimiters: [
              {left: '$$', right: '$$', display: false}
          ]
      })
    );
    return (
      <span ref={r}>{children}</span>
    )
}

