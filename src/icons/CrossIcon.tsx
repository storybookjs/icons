import * as React from 'react';
import { IconProps } from '../types';

export const CrossIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M11.146 2.146a.5.5 0 11.707.707L7.708 7l4.147 4.146a.5.5 0 11-.707.707L7 7.708l-4.146 4.147a.5.5 0 01-.707-.708L6.293 7 2.147 2.853a.5.5 0 11.707-.707L7 6.293l4.146-4.147z"
        fill={color}
      />
    </svg>
  );
});
