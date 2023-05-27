import * as React from 'react';
import { SVGProps } from 'react';
const SvgClosePopUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.625 4.375-11.25 11.25M15.625 15.625 4.375 4.375"
      stroke="#CC1F20"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgClosePopUp;
