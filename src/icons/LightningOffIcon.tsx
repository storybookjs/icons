import * as React from 'react';
import { IconProps } from '../types';

export const LightningOffIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z"
        fill={color}
      />
    </svg>
  );
});
