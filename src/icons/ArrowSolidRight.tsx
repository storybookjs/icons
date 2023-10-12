import * as React from 'react';
import { IconProps } from '../types';

export const ArrowSolidRight = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ArrowSolidRight;
