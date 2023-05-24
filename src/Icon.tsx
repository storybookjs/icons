import React from 'react';
import { icons } from './iconPaths';

export type IconProps = keyof typeof icons;

interface Props {
  name: IconProps;
  size?: number;
  color?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, Props>(
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
