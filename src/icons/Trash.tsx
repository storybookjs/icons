import * as React from 'react';
import { IconProps } from '../types';

export const Trash = /* @__PURE__ */ React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z"
          fill={color}
        />
      </svg>
    );
  }
);
