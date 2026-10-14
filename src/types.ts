import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  size?: number;
}

/**
 * An icon component individually exported from `@storybook/icons`, e.g. `CircleHollowIcon`.
 */
export type Icon = React.ComponentType<IconProps>;
