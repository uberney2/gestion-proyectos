import * as React from 'react';
import { SVGProps } from 'react';
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.6668 4.27337L11.7268 3.33337L8.00016 7.06004L4.2735 3.33337L3.3335 4.27337L7.06016 8.00004L3.3335 11.7267L4.2735 12.6667L8.00016 8.94004L11.7268 12.6667L12.6668 11.7267L8.94016 8.00004L12.6668 4.27337Z"
      fill={props.fill}
    />
  </svg>
);
export default CloseIcon;
