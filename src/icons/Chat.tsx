import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const Chat = (allProps: IconProps) => {
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
            d="M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z"
            fill="#000"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Chat;
