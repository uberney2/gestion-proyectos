import * as React from 'react';
import { SVGProps } from 'react';
const WarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z"
      fill={props.fill}
    />
  </svg>
);
export default WarningIcon;