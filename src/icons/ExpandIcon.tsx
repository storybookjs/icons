import * as React from 'react';
import { IconProps } from '../types';

export const ExpandIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z"
        fill={color}
      />
    </svg>
  );
});
