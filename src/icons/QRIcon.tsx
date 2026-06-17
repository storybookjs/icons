import * as React from 'react';
import { IconProps } from '../types';

export const QRIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M1.5 9a.5.5 0 01.5.5v2.504h2.5a.5.5 0 010 1H2a1 1 0 01-1-1V9.5a.5.5 0 01.5-.5zM12.5 9a.5.5 0 01.5.5v2.504a1 1 0 01-1 1H9.5a.5.5 0 010-1H12V9.5a.5.5 0 01.5-.5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6 8.01a.5.5 0 01.4.49v2l-.01.1a.501.501 0 01-.39.39l-.1.01h-2a.5.5 0 01-.49-.4L3 10.5v-2a.5.5 0 01.5-.5h2l.1.01zM4 10h1V9H4v1z"
        fill={color}
      />
      <path
        d="M8.75 10a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5a.25.25 0 01.25-.25h.5zM10.75 10a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5a.25.25 0 01.25-.25h.5zM9.75 9a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 019 9.75v-.5A.25.25 0 019.25 9h.5zM8.75 8a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 018 8.75v-.5A.25.25 0 018.25 8h.5zM10.75 8a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5a.25.25 0 01.25-.25h.5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6 3.01a.5.5 0 01.4.49v2l-.01.1a.501.501 0 01-.39.39L5.5 6h-2a.5.5 0 01-.49-.4L3 5.5v-2a.5.5 0 01.5-.5h2l.1.01zM4 5h1V4H4v1zM10.6 3.01a.5.5 0 01.4.49v2l-.01.1a.501.501 0 01-.39.39l-.1.01h-2a.5.5 0 01-.49-.4L8 5.5v-2a.5.5 0 01.5-.5h2l.1.01zM9 5h1V4H9v1z"
        fill={color}
      />
      <path
        d="M12 1a1 1 0 011 1v2.504a.5.5 0 01-1 0V2H9.5a.5.5 0 010-1H12zM4.5 1.004a.5.5 0 110 1H2V4.5a.5.5 0 01-1 0V2.004a1 1 0 011-1h2.5z"
        fill={color}
      />
    </svg>
  );
});
