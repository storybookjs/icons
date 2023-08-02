import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const ChevronUp = (allProps: IconProps) => {
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
            d="M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ChevronUp;
