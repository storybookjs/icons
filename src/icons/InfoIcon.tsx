import * as React from 'react';
import { IconProps } from '../types';

export const InfoIcon = /* @__PURE__ */ React.forwardRef<
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5.5a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z"
        fill={color}
      />
      <path d="M7.75 3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={color} />
    </svg>
  );
});
