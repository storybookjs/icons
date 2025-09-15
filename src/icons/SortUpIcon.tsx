import * as React from 'react';
import { IconProps } from '../types';

export const SortUpIcon = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
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
        d="M4.308 1.538a.496.496 0 00-.162.108l-3 3a.5.5 0 10.708.707L4 3.207V11.5a.5.5 0 001 0V3.207l2.146 2.147a.5.5 0 10.708-.708l-3-3a.5.5 0 00-.546-.108zM8 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM10.5 5a.5.5 0 000 1h2a.5.5 0 000-1h-2zM13 8.5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5zM7 11.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"
        fill={color}
      />
    </svg>
  );
});
