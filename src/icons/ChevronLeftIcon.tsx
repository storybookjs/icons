import * as React from 'react';
import { IconProps } from '../types';

export const ChevronLeftIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z"
        fill={color}
      />
    </svg>
  );
});
