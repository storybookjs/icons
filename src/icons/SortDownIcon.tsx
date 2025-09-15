import * as React from 'react';
import { IconProps } from '../types';

export const SortDownIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M4.5 2a.5.5 0 01.5.5v8.293l2.146-2.147a.5.5 0 11.708.708L4.86 12.346l-.007.008a.499.499 0 01-.351.146h-.006a.5.5 0 01-.35-.146l-3-3a.5.5 0 11.707-.708L4 10.793V2.5a.5.5 0 01.5-.5zM7 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM10.5 8a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8 11.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z"
        fill={color}
      />
    </svg>
  );
});
