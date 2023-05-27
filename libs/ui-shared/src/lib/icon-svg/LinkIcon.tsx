import * as React from 'react';
import { SVGProps } from 'react';
const SvgLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.73 7.09 1.367-1.367a3.045 3.045 0 0 1 4.3 4.301l-1.953 1.947a3.03 3.03 0 0 1-2.147.892M9.517 14.906 8.15 16.273a3.045 3.045 0 0 1-4.301-4.302l1.953-1.947a3.03 3.03 0 0 1 2.148-.891"
      stroke="#CC1F20"
      strokeWidth={1.06}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.497 14.122 1.875 1.875M5.999 6.624 4.124 4.749m11.873 6.874h2.5M8.499 4.124v-2.5M3.5 9.123H1m9.998 7.499v2.5"
      stroke="#CC1F20"
      strokeWidth={0.884}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgLinkIcon;
