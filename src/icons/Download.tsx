import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Download = (allProps: IconProps) => {
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
            d="M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z"
            fill="#000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Download;
