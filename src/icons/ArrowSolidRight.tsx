import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const ArrowSolidRight = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ArrowSolidRight;
