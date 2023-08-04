import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Drag = (allProps: IconProps) => {
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
            d="M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Drag;
