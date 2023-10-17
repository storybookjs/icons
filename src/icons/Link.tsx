import * as React from 'react';
import { IconProps } from '../types';

export const Link = /* @__PURE__ */ React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
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
          d="M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z"
          fill={color}
        />
        <path
          d="M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z"
          fill={color}
        />
      </svg>
    );
  }
);
