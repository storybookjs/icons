import * as React from 'react';
import { IconProps } from '../types';

export const ChangedIcon = /* @__PURE__ */ React.forwardRef<
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z"
        fill={color}
      />
    </svg>
  );
});
