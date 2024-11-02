import * as React from "react";
import type { SVGProps } from "react";
const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#888E94"
      d="M5.7 15.7q-.45.45-.975.275-.5-.175-.675-.725-.175-.525.25-.95l7-7.025q.35-.325.7-.325.375 0 .7.325l7 7.025q.425.425.25.95t-.7.7q-.5.2-.95-.25L12 9.425z"
    />
  </svg>
);
export default SvgUp;
