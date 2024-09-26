import * as React from "react";
import type { SVGProps } from "react";
const SvgHashTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#A3A8AE"
      strokeLinecap="round"
      strokeWidth={2}
      d="m10.5 4-3 16M16 4l-3 16M6.5 8.5h12M5 15h12"
    />
  </svg>
);
export default SvgHashTag;
