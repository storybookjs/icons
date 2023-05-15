import React from 'react';
import { icons } from './coloredIconPaths';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  size?: number;
}

export const ColoredIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 48, ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        {icons[name]}
      </svg>
    );
  }
);

ColoredIcon.displayName = 'ColoredIcon';
