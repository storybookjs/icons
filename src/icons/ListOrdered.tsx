import * as React from 'react';
import { IconProps } from '../types';

export const ListOrdered = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ListOrdered;
