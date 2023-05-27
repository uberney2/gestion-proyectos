import * as React from 'react';
import { SVGProps } from 'react';
const SvgDetailsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 .333c-4.167 0-7.725 2.592-9.167 6.25 1.442 3.659 5 6.25 9.167 6.25s7.725-2.591 9.167-6.25c-1.442-3.658-5-6.25-9.167-6.25Zm0 10.417a4.168 4.168 0 0 1-4.167-4.167c0-2.3 1.867-4.166 4.167-4.166s4.167 1.866 4.167 4.166c0 2.3-1.867 4.167-4.167 4.167ZM7.5 6.583c0-1.383 1.117-2.5 2.5-2.5s2.5 1.117 2.5 2.5c0 1.384-1.117 2.5-2.5 2.5a2.497 2.497 0 0 1-2.5-2.5Z"
      fill="#CC1F20"
    />
  </svg>
);
export default SvgDetailsIcon;
