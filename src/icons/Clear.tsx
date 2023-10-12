import * as React from 'react';
import { IconProps } from '../types';

export const Clear = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Clear;
