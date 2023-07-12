import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Repo = (allProps: IconProps) => {
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
            d="M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z"
            fill="#000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Repo;
