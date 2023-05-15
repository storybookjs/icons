import React from 'react';
import { ChromaticLogo } from './logos/Chromatic';
import { StorybookLogo } from './logos/Storybook';

export interface LogoProps {
  name: 'chromatic' | 'storybook';
  theme?: 'light' | 'dark';
  variant?: 'default' | 'monochrome';
  iconOnly?: boolean;
  width?: number;
  height?: number;
}

export const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  ({ name, width, height, ...props }, forwardedRef) => {
    if (name === 'chromatic')
      return (
        <ChromaticLogo
          width={width}
          height={height}
          {...props}
          ref={forwardedRef}
        />
      );
    if (name === 'storybook')
      return (
        <StorybookLogo
          width={width}
          height={height}
          {...props}
          ref={forwardedRef}
        />
      );
    return null;
  }
);

Logo.displayName = 'Logo';
