import * as React from 'react';
import { IconProps } from '../types';

export const TypeIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z"
        fill={color}
      />
      <path
        d="M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z"
        fill={color}
      />
    </svg>
  );
});
