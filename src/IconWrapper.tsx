import * as React from 'react';
import { IconProps } from './types';

export const IconWrapper: React.FC<{ icon: React.ReactNode } & IconProps> = ({
  icon,
  color: colorProp,
  size: sizeProp,
  ...restProps
}) => {
  const color = colorProp || 'currentColor';
  const size = sizeProp || '14px';

  return (
    <span
      role="img"
      aria-hidden="true"
      style={{
        color,
        width: size,
        height: size,
        display: 'inline-flex',
        fontSize: 'inherit',
      }}
      {...restProps}
    >
      {icon}
    </span>
  );
};
