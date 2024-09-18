import * as React from 'react';
import { IconProps } from '../types';

export const SaveIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M11.083 12.25H2.917a1.167 1.167 0 01-1.167-1.167V2.917A1.167 1.167 0 012.917 1.75h6.416l2.917 2.917v6.416a1.167 1.167 0 01-1.167 1.167z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.917 12.25V7.583H4.083v4.667M4.083 1.75v2.917H8.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
