import * as React from 'react';
import { IconProps } from '../types';

export const PlayNextIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z"
        fill={color}
      />
    </svg>
  );
});
