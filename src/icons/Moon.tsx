import React, { forwardRef } from 'react';
import { IconProps } from '../types';

export const Moon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardedRef}
        {...props}
      >
        <g clipPath="url(#prefix__clip0_1107_3493)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.335.047l-.15-.015a7.499 7.499 0 106.14 10.577c.103-.229-.156-.447-.386-.346a5.393 5.393 0 01-.771.27A5.356 5.356 0 019.153.691C9.37.568 9.352.23 9.106.175a7.545 7.545 0 00-.77-.128zM6.977 1.092a6.427 6.427 0 005.336 10.671A6.427 6.427 0 116.977 1.092z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0_1107_3493">
            <path
              fill="#fff"
              transform="scale(1.07124)"
              d="M0 0h14.001v14.002H0z"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
