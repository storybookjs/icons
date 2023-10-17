import * as React from 'react';
import { IconProps } from '../types';

export const Comment = /* @__PURE__ */ React.forwardRef<
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
        d="M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z"
        fill={color}
      />
    </svg>
  );
});
