import * as React from 'react';
import { IconProps } from './types';

export const IconWrapper: React.FC<{ icon: React.ReactNode } & IconProps> = ({
  icon,
  color: colorProp,
  size: sizeProp,
  autoSize,
  ...restProps
}) => {
  const color = colorProp || 'currentColor';
  let size = '14px';
  if (sizeProp) size = `${sizeProp}px`;
  if (autoSize) size = '1em';

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
