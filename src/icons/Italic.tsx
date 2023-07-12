import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Italic = (allProps: IconProps) => {
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
            d="M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Italic;
