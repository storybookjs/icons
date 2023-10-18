import * as React from 'react';
import { IconProps } from '../types';

export const BrowserIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z"
        fill={color}
      />
    </svg>
  );
});
