import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Direction = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_1107_3594)">
            <path
              d="M11.451.537l.01 12.922h0L7.61 8.946a1.077 1.077 0 00-.73-.374L.964 8.087 11.45.537h0z"
              stroke="currentColor"
              strokeWidth={1.077}
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1107_3594">
              <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Direction;
