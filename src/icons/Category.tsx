import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Category = (allProps: IconProps) => {
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
            d="M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Category;
