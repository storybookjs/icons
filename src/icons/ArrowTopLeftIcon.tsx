import * as React from 'react';
import { IconProps } from '../types';

export const ArrowTopLeftIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M1.904 8.768V2.404a.5.5 0 01.5-.5h6.364a.5.5 0 110 1H3.61l8.339 8.339a.5.5 0 01-.707.707l-8.34-8.34v5.158a.5.5 0 01-1 0z"
        fill={color}
      />
    </svg>
  );
});
