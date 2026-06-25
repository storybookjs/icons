import * as React from 'react';
import { IconProps } from '../types';

export const StatusRemoveIcon = /* @__PURE__ */ React.forwardRef<
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
      <path d="M8.5 6.5a.5.5 0 010 1h-3a.5.5 0 010-1h3z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h7zM4 10h6V4H4v6z"
        fill={color}
      />
    </svg>
  );
});
