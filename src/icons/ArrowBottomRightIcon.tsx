import * as React from 'react';
import { IconProps } from '../types';

export const ArrowBottomRightIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M12.096 5.232v6.364a.5.5 0 01-.5.5H5.232a.5.5 0 010-1h5.157L2.05 2.757a.5.5 0 01.707-.707l8.34 8.34V5.231a.5.5 0 111 0z"
        fill={color}
      />
    </svg>
  );
});
