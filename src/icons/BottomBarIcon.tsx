import * as React from 'react';
import { IconProps } from '../types';

export const BottomBarIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z"
        fill={color}
      />
    </svg>
  );
});
