import * as React from 'react';
import { IconProps } from '../types';

export const Timer = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Timer;
