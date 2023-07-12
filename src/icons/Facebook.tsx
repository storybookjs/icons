import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Facebook = (allProps: IconProps) => {
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
            d="M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Facebook;
