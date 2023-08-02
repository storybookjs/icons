import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Gitlab = (allProps: IconProps) => {
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
            d="M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Gitlab;
