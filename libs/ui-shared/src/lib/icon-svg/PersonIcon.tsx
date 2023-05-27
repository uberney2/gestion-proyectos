import * as React from 'react';
import { SVGProps } from 'react';
const SvgPersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={19} cy={19} r={18.5} stroke="#D1D3D4" />
    <path
      d="M19 19a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm2.333-3.5a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0ZM26 24.833C26 26 24.833 26 24.833 26H13.167S12 26 12 24.833c0-1.166 1.167-4.666 7-4.666s7 3.5 7 4.666Zm-1.167-.004c0-.287-.18-1.15-.97-1.942-.761-.76-2.192-1.554-4.863-1.554-2.672 0-4.102.794-4.863 1.554-.79.791-.968 1.655-.97 1.942h11.666Z"
      fill="#D1D3D4"
    />
  </svg>
);
export default SvgPersonIcon;
