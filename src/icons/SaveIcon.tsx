import * as React from 'react';
import { IconProps } from '../types';

export const SaveIcon = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.917 1.25A1.667 1.667 0 001.25 2.917v8.166a1.666 1.666 0 001.667 1.667h8.166a1.666 1.666 0 001.667-1.667V4.667a.5.5 0 00-.146-.354L9.687 1.396a.5.5 0 00-.354-.146H2.917zm0 1a.667.667 0 00-.667.667v8.166a.667.667 0 00.667.667h.666V7.583a.5.5 0 01.5-.5h5.834a.5.5 0 01.5.5v4.167h.666a.666.666 0 00.667-.667v-6.21L9.126 2.25H4.583v1.917H8.75a.5.5 0 110 1H4.083a.5.5 0 01-.5-.5V2.25h-.666zm1.666 9.5h4.834V8.084H4.583v3.666z"
        fill={color}
      />
    </svg>
  );
});
