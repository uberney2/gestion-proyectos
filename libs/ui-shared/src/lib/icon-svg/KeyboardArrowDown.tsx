import { SVGProps } from 'react';
const SvgKeyboardArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || '12'}
    height={props.height || '8'}
    viewBox="0 0 12 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.41 0.589966L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L0 1.99997L1.41 0.589966Z"
      fill={props.fill}
    />
  </svg>
);
export default SvgKeyboardArrowDown;
