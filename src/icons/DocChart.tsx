import * as React from 'react';
import { IconProps } from '../types';

export const DocChart = /* @__PURE__ */ React.forwardRef<
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
        d="M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z"
        fill={color}
      />
    </svg>
  );
});
