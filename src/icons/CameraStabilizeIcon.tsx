import * as React from 'react';
import { IconProps } from '../types';

export const CameraStabilizeIcon = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_2484_400)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 1A1.5 1.5 0 001 2.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 012.5 0h1a.5.5 0 010 1h-1zm3.352 1.223A.5.5 0 016.268 2h1.464a.5.5 0 01.416.223L9.333 4H11.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2.167l1.185-1.777zM11.5 1A1.5 1.5 0 0113 2.5v1a.5.5 0 001 0v-1A2.5 2.5 0 0011.5 0h-1a.5.5 0 000 1h1zm-9 12A1.5 1.5 0 011 11.5v-1a.5.5 0 00-1 0v1A2.5 2.5 0 002.5 14h1a.5.5 0 000-1h-1zm9 0a1.5 1.5 0 001.5-1.5v-1a.5.5 0 011 0v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1zM8 7a1 1 0 11-2 0 1 1 0 012 0zm1 0a2 2 0 11-4 0 2 2 0 014 0z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2484_400">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
