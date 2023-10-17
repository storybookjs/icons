import * as React from 'react';
import { IconProps } from '../types';

export const Mobile = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z"
        fill={color}
      />
    </svg>
  );
});
