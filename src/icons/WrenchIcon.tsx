import * as React from 'react';
import { IconProps } from '../types';

export const WrenchIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z"
        fill={color}
      />
    </svg>
  );
});
