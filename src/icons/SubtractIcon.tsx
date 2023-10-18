import * as React from 'react';
import { IconProps } from '../types';

export const SubtractIcon = /* @__PURE__ */ React.forwardRef<
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
      <path d="M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z"
        fill={color}
      />
    </svg>
  );
});
