import * as React from 'react';
import { IconProps } from '../types';
import { IconWrapper } from '../IconWrapper';

export const PhotoDrag = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z"
            fill="currentColor"
          />
          <path
            d="M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PhotoDrag;
