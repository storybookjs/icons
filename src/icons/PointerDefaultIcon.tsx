import * as React from 'react';
import { IconProps } from '../types';

export const PointerDefaultIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z"
        fill={color}
      />
    </svg>
  );
});
