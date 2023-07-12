import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Camera = (allProps: IconProps) => {
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
            d="M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Camera;
