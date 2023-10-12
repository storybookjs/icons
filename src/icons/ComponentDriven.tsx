import * as React from 'react';
import { IconProps } from '../types';

export const ComponentDriven = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z"
          fill={color}
        />
      </svg>
    );
  }
);

export default ComponentDriven;
