import React, { forwardRef } from 'react';
import { IconProps } from '../types';

export const Unlock = forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#prefix__clip0_1107_3614)" fill={color}>
          <path d="M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z"
          />
        </g>
        <defs>
          <clipPath id="prefix__clip0_1107_3614">
            <path fill="#fff" d="M0 0h14v14H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
