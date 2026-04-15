import * as React from 'react';
import { IconProps } from '../types';

export const FilesIcon = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        d="M6.5 11a.5.5 0 010 1h-4a.5.5 0 010-1h4zM4.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H5v1.5a.5.5 0 01-1 0V8H2.5a.5.5 0 010-1H4V5.5a.5.5 0 01.5-.5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5.004a.5.5 0 01.357.15l1.993 1.993a.5.5 0 01.15.358v8a.5.5 0 01-.5.5H9v2.499a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H5v-2.5a.5.5 0 01.5-.5h6zm-10.5 13h7v-7l-2-2H1v9zm5-10h.5a.5.5 0 01.357.15L8.85 5.146a.5.5 0 01.15.358v4.5h4v-7l-2-2H6v2z"
        fill={color}
      />
    </svg>
  );
});
