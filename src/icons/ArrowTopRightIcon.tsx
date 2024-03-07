import * as React from 'react';
import { IconProps } from '../types';

export const ArrowTopRightIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M12.096 8.768V2.404a.5.5 0 00-.5-.5H5.232a.5.5 0 100 1h5.157L2.05 11.243a.5.5 0 10.707.707l8.34-8.34v5.158a.5.5 0 101 0z"
        fill={color}
      />
    </svg>
  );
});
