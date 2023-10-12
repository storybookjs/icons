import * as React from 'react';
import { IconProps } from '../types';

export const Support = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Support;
