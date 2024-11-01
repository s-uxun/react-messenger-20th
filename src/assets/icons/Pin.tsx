import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g stroke="#888E94" strokeWidth={1.333}>
      <path d="M9.757 2.606c.436-.29.653-.435.89-.412.238.024.423.209.793.579l1.787 1.787c.37.37.555.555.579.793.023.237-.122.454-.412.89l-1.1 1.648c-.374.562-.561.843-.71 1.143q-.168.334-.286.688c-.106.317-.172.648-.305 1.31l-.127.637v.004a.667.667 0 0 1-1.032.417l-.004-.002-.017-.013a23.3 23.3 0 0 1-5.888-5.888l-.013-.017-.002-.004a.667.667 0 0 1 .417-1.031l.004-.001.636-.127c.663-.133.994-.2 1.311-.305q.354-.12.688-.285c.3-.15.58-.337 1.142-.712z" />
      <path strokeLinecap="round" d="m3.333 12.667 3-3" />
    </g>
  </svg>
);
export default SvgPin;
