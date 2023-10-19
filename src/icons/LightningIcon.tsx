import * as React from 'react';
import { IconProps } from '../types';

export const LightningIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z"
        fill={color}
      />
    </svg>
  );
});
