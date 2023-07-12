import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Ruler = (allProps: IconProps) => {
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
            d="M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z"
            fill="#000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Ruler;
