import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const ChevronDown = (allProps: IconProps) => {
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
            d="M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChevronDown;
