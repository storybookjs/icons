import * as React from 'react';
import { IconProps } from '../types';

export const AzureDevOps = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_1107_3503)">
        <path
          d="M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1107_3503">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
