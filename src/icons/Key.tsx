import * as React from 'react';
import { IconProps } from '../types';

export const Key = /* @__PURE__ */ React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M11 4a1 1 0 11-2 0 1 1 0 012 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z"
          fill={color}
        />
      </svg>
    );
  }
);
