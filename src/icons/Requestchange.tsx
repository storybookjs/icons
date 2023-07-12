import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Requestchange = (allProps: IconProps) => {
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
            d="M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Requestchange;
