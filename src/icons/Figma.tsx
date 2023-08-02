import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Figma = (allProps: IconProps) => {
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
            d="M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Figma;
