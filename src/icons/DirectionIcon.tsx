import * as React from 'react';
import { IconProps } from '../types';

export const DirectionIcon = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_1107_3594)">
        <path
          d="M11.451.537l.01 12.922L7.61 8.946a1.078 1.078 0 00-.731-.374L.965 8.087 11.45.537z"
          stroke={color}
          strokeWidth={1.077}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1107_3594">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
