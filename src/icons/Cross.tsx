import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Cross = (allProps: IconProps) => {
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
            d="M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Cross;
