import * as React from 'react';
import { IconProps } from '../types';

export const BugIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M11 0a.5.5 0 010 1 2 2 0 00-1.987 1.78C9.618 3.33 10 4.12 10 5a3 3 0 003-3 .5.5 0 011 0 4.002 4.002 0 01-3 3.874V7h2.5a.5.5 0 010 1H11v.626c1.725.444 3 2.01 3 3.874a.5.5 0 01-1 0 3 3 0 00-2.055-2.846 4 4 0 01-7.891 0A3 3 0 001 12.5a.5.5 0 01-1 0 4.002 4.002 0 013-3.874V8H.5a.5.5 0 010-1H3V5.874A4.002 4.002 0 010 2a.5.5 0 011 0 3 3 0 003 3c0-.88.382-1.67.986-2.22A1.999 1.999 0 003 1a.5.5 0 010-1c1.384 0 2.545.938 2.892 2.213a2.99 2.99 0 012.215 0A2.999 2.999 0 0111 0zM4 9a3 3 0 002.5 2.958V6H4v3zm3.5 2.958A3 3 0 0010 9V6H7.5v5.958zM7 3a2 2 0 00-2 2h4a2 2 0 00-2-2z"
        fill={color}
      />
    </svg>
  );
});
