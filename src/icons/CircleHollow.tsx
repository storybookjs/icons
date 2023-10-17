import * as React from 'react';
import { IconProps } from '../types';

export const CircleHollow = /* @__PURE__ */ React.forwardRef<
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
    </svg>
  );
});
