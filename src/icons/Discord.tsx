import React, { forwardRef } from 'react';
import { IconProps } from '../types';

export const Discord = forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Discord;
