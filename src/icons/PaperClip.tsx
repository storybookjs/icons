import * as React from 'react';
import { IconProps } from '../types';

export const PaperClip = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z"
          fill={color}
        />
      </svg>
    );
  }
);

export default PaperClip;
