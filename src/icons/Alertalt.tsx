import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Alertalt = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Alertalt;
