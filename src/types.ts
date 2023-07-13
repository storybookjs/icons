import React from 'react';

export type IconProps = {
  /** Set icon fill color from design system */
  color?: string;
  /** Set width and height of icon in pixels */
  size?: number;
  /** Props to pass directly to svg element */
  svgProps?: React.SVGProps<SVGSVGElement>;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>;
