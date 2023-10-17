import * as React from 'react';
import { IconProps } from '../types';

export const ZoomOut = /* @__PURE__ */ React.forwardRef<
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
      <path d="M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        fill={color}
      />
    </svg>
  );
});
