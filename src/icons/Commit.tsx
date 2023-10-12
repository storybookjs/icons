import * as React from 'react';
import { IconProps } from '../types';

export const Commit = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Commit;
