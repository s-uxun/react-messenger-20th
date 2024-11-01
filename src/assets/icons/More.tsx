import * as React from "react";
import type { SVGProps } from "react";
const SvgMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color || "#BFC2C8"}
      d="M14 12a2 2 0 0 1-.575 1.425Q12.85 14 12 14a2 2 0 0 1-1.425-.575A2 2 0 0 1 10 12q0-.85.575-1.425A2 2 0 0 1 12 10q.85 0 1.425.575T14 12m-7 0a2 2 0 0 1-.575 1.425Q5.85 14 5 14a2 2 0 0 1-1.425-.575A2 2 0 0 1 3 12q0-.85.575-1.425A2 2 0 0 1 5 10q.85 0 1.425.575T7 12m14 0a2 2 0 0 1-.575 1.425Q19.851 14 19 14a2 2 0 0 1-1.425-.575A2 2 0 0 1 17 12q0-.85.575-1.425A2 2 0 0 1 19 10q.85 0 1.425.575T21 12"
    />
  </svg>
);
export default SvgMore;
