import * as React from "react";
import type { SVGProps } from "react";
const SvgBottomBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 375 34"
    {...props}
  >
    <rect width={120} height={5} x={128} y={21} fill="#121212" rx={2.5} />
  </svg>
);
export default SvgBottomBar;
