import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#181A1B"
      d="M5.7 19.7q-.425.425-.95.25a1.13 1.13 0 0 1-.725-.675q-.175-.525.275-.975l14-14q.425-.425.95-.25t.7.7q.2.5-.25.95zm-1.4-14q-.45-.45-.275-.95.175-.525.7-.7.55-.175.975.25l14 14q.425.425.25.95t-.7.725q-.5.175-.95-.275z"
    />
  </svg>
);
export default SvgClose;
