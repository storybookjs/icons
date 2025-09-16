import * as React from 'react';
import { IconProps } from '../types';

export const EditorIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M7.536 5.314a.5.5 0 01.928.372l-2 5a.5.5 0 01-.928-.371l2-5zM3.646 6.146a.5.5 0 01.708.708L3.207 8l1.147 1.146a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 01-.063-.63l.063-.078 1.5-1.5zM9.646 6.146a.5.5 0 01.707 0l1.5 1.5.065.079a.497.497 0 01-.064.629l-1.5 1.5a.5.5 0 01-.708-.708L10.793 8 9.646 6.854a.5.5 0 010-.708z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 1.004a.5.5 0 01.5.5v11l-.01.1a.501.501 0 01-.39.39l-.1.01H.5l-.1-.01a.501.501 0 01-.39-.39l-.01-.1v-11a.5.5 0 01.5-.5h13zm-12.5 11h12v-8H1v8zm.5-10a.5.5 0 100 1 .5.5 0 000-1zm2 0a.5.5 0 100 1 .5.5 0 000-1zm2 0a.5.5 0 100 1 .5.5 0 000-1z"
        fill={color}
      />
    </svg>
  );
});
