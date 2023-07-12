import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Windows = (allProps: IconProps) => {
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
          <path
            d="M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Windows;
