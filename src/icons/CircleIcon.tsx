import * as React from 'react';
import { IconProps } from '../types';

export const CircleIcon = /* @__PURE__ */ React.forwardRef<
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
      <path d="M14 7A7 7 0 110 7a7 7 0 0114 0z" fill={color} />
    </svg>
  );
});
