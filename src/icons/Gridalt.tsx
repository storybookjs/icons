import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Gridalt = (allProps: IconProps) => {
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
            d="M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Gridalt;
