import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Credit = (allProps: IconProps) => {
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
          <path d="M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z" fill="#000" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Credit;
