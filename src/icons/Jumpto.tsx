import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Jumpto = (allProps: IconProps) => {
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
            d="M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z"
            fill="#000"
          />
          <path
            d="M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Jumpto;
