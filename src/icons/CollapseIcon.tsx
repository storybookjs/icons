import * as React from 'react';
import { IconProps } from '../types';

export const CollapseIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z"
        fill={color}
      />
    </svg>
  );
});
