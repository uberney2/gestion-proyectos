import * as React from 'react';
import { SVGProps } from 'react';
const SvgPencilRed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.807 2.753c.26.26.26.68 0 .94l-1.22 1.22-2.5-2.5 1.22-1.22c.26-.26.68-.26.94 0l1.56 1.56ZM0 13v-2.5l7.373-7.373 2.5 2.5L2.5 13H0Z"
      fill="#CC1F20"
    />
  </svg>
);
export default SvgPencilRed;
