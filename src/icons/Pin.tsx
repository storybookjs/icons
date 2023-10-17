import * as React from 'react';
import { IconProps } from '../types';

export const Pin = /* @__PURE__ */ React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z"
          fill={color}
        />
      </svg>
    );
  }
);
