import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Nut = (allProps: IconProps) => {
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
            d="M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Nut;
