import * as React from 'react';
import { IconProps } from '../types';

export const ZoomReset = /* @__PURE__ */ React.forwardRef<
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
        d="M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z"
        fill={color}
      />
    </svg>
  );
});
