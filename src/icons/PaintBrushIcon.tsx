import * as React from 'react';
import { IconProps } from '../types';

export const PaintBrushIcon = /* @__PURE__ */ React.forwardRef<
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
        d="M10.027.271a.752.752 0 01.947 0l.057.052 2.646 2.647.052.056a.752.752 0 010 .948l-.052.056-4.47 4.47 1.147 1.146.293-.293a.5.5 0 01.707 0l2.293 2.293a.5.5 0 010 .707l-1.293 1.293-.078.065a.502.502 0 01-.55 0l-.08-.065-2.292-2.293a.5.5 0 010-.707l.293-.293L8.324 9.03a.75.75 0 010-1.06l4.47-4.47L10.5 1.207l-.647.646.086.086a1.5 1.5 0 010 2.122L4.5 9.5l-.177.183C2.592 11.53 4 12.03 4 13a1 1 0 01-2 0c0-1 1.464-1.537 0-3l.003-.004-.063-.057-.879-.879a1.5 1.5 0 01-.103-2.006l.103-.115L6.94 1.061a1.5 1.5 0 012.121 0l.086.085.823-.823.057-.052zM10.415 11L12 12.586l.585-.586-1.585-1.586-.586.586zM8.354 1.768a.5.5 0 00-.629-.064l-.078.064L2.32 7.094c.782.138 2.263-.097 3.52-.349l3.393-3.392.063-.078a.501.501 0 000-.55l-.063-.079-.879-.878z"
        fill={color}
      />
    </svg>
  );
});
