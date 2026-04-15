import * as React from 'react';
import { IconProps } from '../types';

export const ChecklistIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M3.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2zM2 12h1v-1H2v1z"
        fill={color}
      />
      <path
        d="M12.5 11a.5.5 0 110 1h-7a.5.5 0 010-1h7zM3.146 5.646a.5.5 0 11.708.707L3.207 7l.647.646a.5.5 0 11-.708.707L2.5 7.707l-.646.646a.5.5 0 01-.708-.707L1.793 7l-.647-.647a.5.5 0 11.708-.707l.646.647.646-.647zM12.5 6.5a.5.5 0 010 1h-7a.5.5 0 010-1h7zM4.146 1.146a.5.5 0 11.708.707l-2 2-.079.065a.498.498 0 01-.629-.065l-1-1a.5.5 0 11.708-.707l.646.647 1.646-1.647zM12.5 2a.5.5 0 010 1h-7a.5.5 0 010-1h7z"
        fill={color}
      />
    </svg>
  );
});
