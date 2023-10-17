import * as React from 'react';
import { IconProps } from '../types';

export const Italic = /* @__PURE__ */ React.forwardRef<
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
      <path d="M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z" fill={color} />
    </svg>
  );
});
