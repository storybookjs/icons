import * as React from 'react';
import { IconProps } from '../types';

export const StatusFailIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M9.147 4.146a.5.5 0 11.707.707L7.707 7l2.147 2.146a.5.5 0 11-.707.707L7 7.707 4.854 9.853a.5.5 0 01-.707-.707L6.293 7 4.147 4.853a.5.5 0 11.707-.707L7 6.293l2.147-2.147z"
        fill={color}
      />
    </svg>
  );
});
