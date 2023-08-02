import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Info = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Info;
