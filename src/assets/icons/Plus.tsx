import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A3A8AE"
      d="M4 13q-.625 0-.875-.5a1.17 1.17 0 0 1 0-1q.25-.5.875-.5h16q.625 0 .85.5.25.5 0 1-.225.5-.85.5zm7-9q0-.625.5-.85a1.06 1.06 0 0 1 1 0q.5.225.5.85v16q0 .625-.5.875-.5.225-1 0-.5-.25-.5-.875z"
    />
  </svg>
);
export default SvgPlus;
