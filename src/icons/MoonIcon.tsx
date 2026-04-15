import * as React from 'react';
import { IconProps } from '../types';

export const MoonIcon = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_1107_3493)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.78.044A6.968 6.968 0 003.5.94a6.999 6.999 0 107 12.122 6.97 6.97 0 002.87-3.16c.098-.213-.144-.417-.359-.322a4.976 4.976 0 01-2.01.42A5 5 0 018.542.645C8.747.53 8.73.214 8.5.164a7.042 7.042 0 00-.72-.12zm-1.268.975a6 6 0 004.98 9.96 6 6 0 11-4.98-9.96z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1107_3493">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
