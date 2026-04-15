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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.896 1c.2 0 .39.08.53.22l3.354 3.353c.14.14.22.332.22.53V11a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h5.896zM3 2a1 1 0 00-1 1v8a1 1 0 001 1h1V8.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V12h1a1 1 0 001-1V5.207L8.793 2H5v2h3.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5V2H3zm2 10h4V9H5v3z"
        fill={color}
      />
    </svg>
  );
});
