import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const BatchDeny = (allProps: IconProps) => {
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
            d="M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default BatchDeny;
