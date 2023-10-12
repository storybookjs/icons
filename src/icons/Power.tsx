import * as React from 'react';
import { IconProps } from '../types';

export const Power = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z" fill={color} />
        <path
          d="M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Power;
