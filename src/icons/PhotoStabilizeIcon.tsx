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
        d="M2.5 1H4V0H2.5A2.5 2.5 0 000 2.5V4h1V2.5A1.5 1.5 0 012.5 1z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 5.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h9a.5.5 0 01.5.5zM3 8.793V3h8v3.793L9.854 5.646a.5.5 0 00-.708 0L6.5 8.293 5.354 7.146a.5.5 0 00-.708 0L3 8.793zm6.5-2.086l1.5 1.5V11H3v-.793l2-2 2.146 2.147a.5.5 0 00.708-.708L7.207 9 9.5 6.707z"
        fill={color}
      />
      <path
        d="M10 1h1.5A1.5 1.5 0 0113 2.5V4h1V2.5A2.5 2.5 0 0011.5 0H10v1zM2.5 13H4v1H2.5A2.5 2.5 0 010 11.5V10h1v1.5A1.5 1.5 0 002.5 13zM10 13h1.5a1.5 1.5 0 001.5-1.5V10h1v1.5a2.5 2.5 0 01-2.5 2.5H10v-1z"
        fill={color}
      />
    </svg>
  );
});
