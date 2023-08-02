import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const ArrowSolidLeft = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ArrowSolidLeft;
