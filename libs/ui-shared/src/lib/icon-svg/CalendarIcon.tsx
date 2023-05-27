import * as React from 'react';
import { SVGProps } from 'react';
const SvgCalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.833 2.333H13V.667h-1.667v1.666H4.667V.667H3v1.666h-.833A1.66 1.66 0 0 0 .508 4L.5 15.667c0 .916.742 1.666 1.667 1.666h11.666c.917 0 1.667-.75 1.667-1.666V4c0-.917-.75-1.667-1.667-1.667Zm-10 5.834v1.666H5.5V8.167H3.833Zm5 0H7.167v1.666h1.666V8.167Zm1.667 0h1.667v1.666H10.5V8.167Zm-8.333 7.5h11.666V6.5H2.167v9.167Z"
      fill="#010101"
    />
  </svg>
);
export default SvgCalendarIcon;
