import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Commit = (allProps: IconProps) => {
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
            d="M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Commit;
