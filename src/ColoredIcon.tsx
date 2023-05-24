import React from 'react';
import { coloredIcons } from './coloredIconPaths';

export type ColoredIconProps = keyof typeof coloredIcons;

interface Props {
  name: ColoredIconProps;
  size?: number;
}

export const ColoredIcon = React.forwardRef<SVGSVGElement, Props>(
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
        {coloredIcons[name]}
      </svg>
    );
  }
);

ColoredIcon.displayName = 'ColoredIcon';
