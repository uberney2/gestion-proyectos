import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5.75 7.75 7 1.5 13.25"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgChevronRightIcon;
