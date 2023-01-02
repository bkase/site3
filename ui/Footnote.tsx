'use client';

import React, { useState } from 'react';
import {useFloating, autoUpdate,   offset,
  flip,
  shift,
  inline,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  safePolygon
 } from '@floating-ui/react';

export default function Footnote({ children, alt }: { children: React.ReactNode, alt: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const {x, y, reference, floating, strategy, context} = useFloating({
    open: show,
    onOpenChange: setShow,
    whileElementsMounted: autoUpdate,
    middleware: [inline(), offset(8), shift(), flip()]
  });

  const hover = useHover(context, {move: false, delay: 100, handleClose: safePolygon()});
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: 'tooltip'});

  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      {show ?
        <span
          className="w-2/3 px-2 md:px-4 lg:px-6 z-10"
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          {...getFloatingProps()}>
          <span className="inline-block px-2 py-1 md:px-3 md:py-2 bg-whiteyellow">{alt}</span>
        </span>
        : <span />}

      <span className="underline decoration-dotted underline-offset-4 hover:bg-lightgrey rounded-md hover:cursor-help" ref={reference} {...getReferenceProps()}>{children}</span>
    </>
  );
}

