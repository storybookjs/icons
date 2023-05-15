import React from 'react';
import { icons } from './iconPaths';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  size?: number;
  color?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 14, color = '#000000', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill={color || 'currentColor'}
        {...props}
        ref={forwardedRef}
      >
        {icons[name]}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
