import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Sidebartoggle = (allProps: IconProps) => {
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
            d="M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z"
            fill="#000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L8.85 5.146a.5.5 0 10-.707.708l.65.65H6v-4.5h6v10H6z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Sidebartoggle;
