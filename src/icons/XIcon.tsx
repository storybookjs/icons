import * as React from 'react';
import { IconProps } from '../types';

export const XIcon = /* @__PURE__ */ React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
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
          d="M11.02.446h2.137L8.49 5.816l5.51 7.28H9.67L6.298 8.683l-3.88 4.413H.282l5.004-5.735L0 .446h4.442l3.064 4.048L11.02.446zm-.759 11.357h1.18L3.796 1.655H2.502l7.759 10.148z"
          fill={color}
        />
      </svg>
    );
  }
);
