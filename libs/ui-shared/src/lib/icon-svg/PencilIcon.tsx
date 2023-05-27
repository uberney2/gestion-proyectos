import * as React from 'react';
import { SVGProps } from 'react';
const SvgPencilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.218 24.6H3.4v-3.817L16.562 7.62l3.817 3.817L7.218 24.6ZM24.412 6.5a.64.64 0 0 1 0 .906l-1.853 1.853-3.817-3.818 1.852-1.853a.64.64 0 0 1 .906 0L24.412 6.5Z"
      stroke="#E61717"
      strokeWidth={1.2}
    />
  </svg>
);
export default SvgPencilIcon;
