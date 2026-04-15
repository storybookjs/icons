import * as React from 'react';
import { IconProps } from '../types';

export const PopOutIcon = /* @__PURE__ */ React.forwardRef<
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
      <g clipPath="url(#prefix__clip0_3002_502)" fill={color}>
        <path d="M10.5 12a.5.5 0 01.5.5v.504a1 1 0 01-1 1H8.5a.5.5 0 010-1H10V12.5a.5.5 0 01.5-.5zM.498 11a.5.5 0 01.5.5v1.502H2.5a.5.5 0 110 1H.998a1 1 0 01-1-1V11.5a.5.5 0 01.5-.5zM6.5 13a.5.5 0 010 1h-2a.5.5 0 010-1h2zM10.501 3.004h.006a.495.495 0 01.232.063c.04.022.08.049.115.083a.497.497 0 01.077.104.493.493 0 01.06.151l.003.038c.003.02.006.04.006.06V6.5a.5.5 0 01-1 0V4.71L6.857 7.855a.5.5 0 11-.707-.708l3.144-3.144L7.499 4a.5.5 0 01.002-1l3 .004z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6.014a.5.5 0 01.4.49v10l-.01.1a.501.501 0 01-.39.39l-.1.01h-10a.5.5 0 01-.49-.4l-.01-.1v-10a.5.5 0 01.5-.5h10l.1.01zM4 10.004h9v-9H4v9z"
        />
        <path d="M.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 01.5 7zM1.5 3.002a.5.5 0 010 1H.998L1 5.499a.5.5 0 01-1 .002l-.002-1.498a1 1 0 011-1.001H1.5z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3002_502">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
