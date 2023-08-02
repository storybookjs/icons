import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Email = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Email;
