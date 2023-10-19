import * as React from 'react';
import { IconProps } from '../types';

export const DiamondIcon = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_1449_588)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z"
          fill="#2E3438"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1449_588">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
