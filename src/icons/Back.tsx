import * as React from 'react';
import { IconProps } from '../types';

export const Back = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Back;
