import * as React from 'react';
import { IconProps } from '../types';

export const GiftIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M9 0a2.5 2.5 0 011.997 4H12.5A1.5 1.5 0 0114 5.5v1c0 .653-.418 1.206-1 1.412V11.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 11.5V7.912c-.582-.206-1-.76-1-1.412v-1A1.5 1.5 0 011.5 4h1.883A2.234 2.234 0 013 2.75c0-.6.208-1.142.597-1.535.39-.394.93-.607 1.533-.607.637 0 1.197.349 1.602.843A2.498 2.498 0 019 0zM7.5 12h4a.5.5 0 00.5-.5V8H7.5v4zM2 11.5a.5.5 0 00.5.5h4V8H2v3.5zM7.5 7h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5v2zm-6-2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5V5h-5zm3.63-3.392c-.363 0-.639.125-.822.31-.184.187-.308.466-.308.832C4 3.44 4.56 4 5.25 4H6.5v-.25c0-.648-.197-1.203-.477-1.585-.283-.388-.616-.557-.893-.557zM9 1a1.5 1.5 0 00-1.5 1.5V4H9a1.5 1.5 0 100-3z"
        fill={color}
      />
    </svg>
  );
});
