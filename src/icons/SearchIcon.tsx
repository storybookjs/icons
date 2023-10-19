import * as React from 'react';
import { IconProps } from '../types';

export const SearchIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        fill={color}
      />
    </svg>
  );
});
