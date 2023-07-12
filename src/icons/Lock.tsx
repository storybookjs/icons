import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Lock = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z"
            fill="#000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Lock;
