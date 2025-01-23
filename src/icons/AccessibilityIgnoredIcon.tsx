import * as React from 'react';
import { IconProps } from '../types';

export const AccessibilityIgnoredIcon = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_2359_558)" fill={color}>
        <path d="M7.636 13.972a7 7 0 116.335-6.335c-.28-.34-.609-.637-.976-.883a6 6 0 10-6.24 6.241c.245.367.542.696.881.977z" />
        <path d="M7.511 7.136a4.489 4.489 0 00-1.478 3.915l-.086.173a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01.316-.948l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243c0 .105.004.21.011.316z" />
        <path d="M8 3.5a1 1 0 11-2 0 1 1 0 012 0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-5.5 0A.5.5 0 019 10h3a.5.5 0 010 1H9a.5.5 0 01-.5-.5z"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2359_558">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
