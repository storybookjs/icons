import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const ShareAlt = (allProps: IconProps) => {
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
            d="M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z"
            fill="currentColor"
          />
          <path
            d="M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ShareAlt;
