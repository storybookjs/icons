import * as React from 'react';
import { IconProps } from '../types';

export const CloseAlt = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z"
          fill={color}
        />
      </svg>
    );
  }
);

export default CloseAlt;
