import * as React from 'react';
import { IconProps } from '../types';

export const PhotoStabilizeIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M6 4a1.25 1.25 0 110 2.5A1.25 1.25 0 016 4zm0 .5A.75.75 0 106 6a.75.75 0 000-1.5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h9zM7.207 9l.647.646a.5.5 0 01-.708.707L5 8.207l-2 2V11h8V8.207l-1.5-1.5L7.207 9zM3 8.793l1.646-1.647.079-.064a.5.5 0 01.629.064L6.5 8.293l2.646-2.647.079-.064a.5.5 0 01.629.064L11 6.793V3H3v5.793z"
        fill={color}
      />
      <path
        d="M0 3.5v-1A2.5 2.5 0 012.5 0h1a.5.5 0 010 1h-1A1.5 1.5 0 001 2.5v1a.5.5 0 01-1 0zM10.5 0h1A2.5 2.5 0 0114 2.5v1a.5.5 0 01-1 0v-1A1.5 1.5 0 0011.5 1h-1a.5.5 0 010-1zM0 10.5v1A2.5 2.5 0 002.5 14h1a.5.5 0 000-1h-1A1.5 1.5 0 011 11.5v-1a.5.5 0 00-1 0zM10.5 14h1a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1a1.5 1.5 0 01-1.5 1.5h-1a.5.5 0 000 1z"
        fill={color}
      />
    </svg>
  );
});
