import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const PaintBrush = (allProps: IconProps) => {
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
            d="M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PaintBrush;
