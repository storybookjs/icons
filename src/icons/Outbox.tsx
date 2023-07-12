import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Outbox = (allProps: IconProps) => {
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
            d="M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z"
            fill="#000"
          />
          <path
            d="M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Outbox;
