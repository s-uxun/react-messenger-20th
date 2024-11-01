import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#222" strokeLinejoin="round" strokeWidth={2}>
      <rect width={4} height={7} x={16} y={12} rx={2} />
      <rect width={4} height={7} x={4} y={12} rx={2} />
      <path
        strokeLinecap="round"
        d="M4 13v3M20 13v3M20 13c0-2.387-.843-4.676-2.343-6.364S14.122 4 12 4s-4.157.948-5.657 2.636S4 10.613 4 13"
      />
    </g>
  </svg>
);
export default SvgHeadphone;
