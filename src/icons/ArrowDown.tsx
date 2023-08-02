import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const ArrowDown = (allProps: IconProps) => {
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
            d="M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ArrowDown;
