import React, { FC } from 'react';
import { icons } from './iconPaths';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  size?: number;
}

export const Icon: FC<IconProps> = ({ name, size = 14, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="currentColor"
      {...props}
    >
      {icons[name]}
    </svg>
  );
};
