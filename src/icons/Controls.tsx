import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Controls = (allProps: IconProps) => {
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
            d="M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Controls;
