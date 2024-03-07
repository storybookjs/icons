import * as React from 'react';
import { IconProps } from '../types';

export const ArrowBottomLeftIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M1.904 5.232v6.364a.5.5 0 00.5.5h6.364a.5.5 0 000-1H3.61l8.339-8.339a.5.5 0 00-.707-.707l-8.34 8.34V5.231a.5.5 0 00-1 0z"
        fill={color}
      />
    </svg>
  );
});
