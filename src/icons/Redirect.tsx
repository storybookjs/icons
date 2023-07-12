import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Redirect = (allProps: IconProps) => {
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
            d="M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Redirect;
