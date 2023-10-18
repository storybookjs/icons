import * as React from 'react';
import { IconProps } from '../types';

export const BranchIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z"
        fill={color}
      />
    </svg>
  );
});
