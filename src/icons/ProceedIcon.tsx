import * as React from 'react';
import { IconProps } from '../types';

export const ProceedIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z"
        fill={color}
      />
    </svg>
  );
});
