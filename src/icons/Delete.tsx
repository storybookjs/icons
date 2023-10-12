import * as React from 'react';
import { IconProps } from '../types';

export const Delete = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Delete;
