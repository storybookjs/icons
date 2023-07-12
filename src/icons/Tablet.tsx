import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Tablet = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Tablet;
