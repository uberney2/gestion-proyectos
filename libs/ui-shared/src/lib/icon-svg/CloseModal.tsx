import * as React from 'react';
import { SVGProps } from 'react';
const SvgCloseModal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.75 5.031 5.25 17.97M18.75 17.969 5.25 5.03"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCloseModal;
