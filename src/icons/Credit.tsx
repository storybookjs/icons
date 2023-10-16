import React, { forwardRef } from 'react';
import { IconProps } from '../types';

export const Credit = forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Credit;
