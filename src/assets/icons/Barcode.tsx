import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g stroke="#181A1B" strokeLinejoin="round" strokeWidth={2}>
      <path d="M21 10V9c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C18.396 5 17.93 5 17 5M3 10V9c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C5.605 5 6.07 5 7 5M21 14v1c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C18.396 19 17.93 19 17 19M3 14v1c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C5.605 19 6.07 19 7 19" />
      <path strokeLinecap="round" d="M12 15V9M8 14v-4M16 14v-4" />
    </g>
  </svg>
);
export default SvgBarcode;
