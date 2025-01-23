import * as React from 'react';
import { IconProps } from '../types';

export const ContrastIgnoredIcon = /* @__PURE__ */ React.forwardRef<
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
      <g
        clipPath="url(#prefix__clip0_2359_559)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
      >
        <path d="M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h7.176a4.526 4.526 0 01-.916-1H1v-9h2v6.5a.499.499 0 00.497.5h2.531a4.548 4.548 0 01-.001-1h-1.32l2.16-2.16c.274-.374.603-.703.977-.977L10 4.711v1.316a4.552 4.552 0 011 0V3.504a.48.48 0 00-.038-.191.5.5 0 00-.462-.31H4v-2h9v5.755c.378.253.715.561 1 .913V.504a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm5.293 0H7.707L4 7.71v1.586l5.293-5.293z" />
        <path d="M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-5.5 0A.5.5 0 019 10h3a.5.5 0 010 1H9a.5.5 0 01-.5-.5z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2359_559">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
