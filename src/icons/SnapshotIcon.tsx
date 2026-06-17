import * as React from 'react';
import { IconProps } from '../types';

export const SnapshotIcon = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        d="M10.5 1A2.5 2.5 0 0113 3.5v7a2.5 2.5 0 01-2.5 2.5h-7l-.256-.013a2.5 2.5 0 01-1.955-1.322v.001l-.006-.01-.036-.074a2.439 2.439 0 01-.133-.339 2.481 2.481 0 01-.085-.378l-.006-.042A2.515 2.515 0 011 10.5v-7a2.5 2.5 0 012.244-2.487L3.5 1h7zm-8.445 9.9A1.5 1.5 0 003.5 12h4.876L6.067 9.691l-.005-.004-.004-.005L4.666 8.29 2.055 10.9zm5.068-1.567L9.79 12h.71a1.5 1.5 0 001.5-1.5V8.625L9.916 6.541 7.123 9.333zM3.5 2A1.5 1.5 0 002 3.5v6.044L4.313 7.23l.079-.064a.501.501 0 01.629.064l1.395 1.396L9.562 5.48l.077-.062a.502.502 0 01.63.062L12 7.21V3.5A1.5 1.5 0 0010.5 2h-7zM5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 .5a1 1 0 100 2 1 1 0 000-2z"
        fill={color}
      />
    </svg>
  );
});
