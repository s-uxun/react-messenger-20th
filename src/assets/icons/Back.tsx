import * as React from "react";
import type { SVGProps } from "react";
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#181A1B"
      d="M15.7 18.3q.45.45.275.975-.175.5-.725.675-.525.175-.95-.25l-7.025-7q-.325-.35-.325-.7 0-.375.325-.7l7.025-7q.425-.425.95-.25t.7.7q.2.5-.25.95L9.425 12z"
    />
  </svg>
);
export default SvgBack;
