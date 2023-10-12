import * as React from 'react';
import { IconProps } from '../types';

export const UserAdd = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={forwardedRef}
        {...props}
      >
        <path
          d="M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z"
          fill={color}
        />
      </svg>
    );
  }
);

export default UserAdd;
