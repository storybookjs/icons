import React, { forwardRef } from 'react';
import { IconProps } from '../types';

export const Apple = forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z"
          fill={color}
        />
      </svg>
    );
  }
);
