import * as React from 'react';
import { IconProps } from '../types';

export const BellIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z"
        fill={color}
      />
    </svg>
  );
});
