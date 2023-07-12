import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Arrowrightalt = (allProps: IconProps) => {
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
            d="M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Arrowrightalt;
