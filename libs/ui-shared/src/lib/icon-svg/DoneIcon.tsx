import * as React from 'react';
import { SVGProps } from 'react';
const DoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    stroke="none"
    {...props}
  >
    <path
      d="M8.6 15.6L4.4 11.4L3 12.8L8.6 18.4L20.6 6.4L19.2 5L8.6 15.6Z"
      fill={props.fill}
    />
  </svg>
);
export default DoneIcon;
