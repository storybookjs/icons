import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const FastForward = (allProps: IconProps) => {
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
            d="M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default FastForward;
