import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function KeyIcon({ ...props }: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 28.065 19.104"
    >
      <g transform="translate(0.325) rotate(1)">
        <path
          d="M0,0H18.622V18.622H0Z"
          transform="translate(0.539)"
          fill="none"
        ></path>
        <g transform="matrix(1, -0.017, 0.017, 1, 5.314, 18.08)">
          <path d="M0,0H0Z" transform="translate(0 -3.249)" fill="none"></path>
          <path
            d="M12.917,15.748a5.622,5.622,0,1,0,0,3.748h4.076v3.748h3.748V19.5h1.874V15.748ZM7.622,19.5A1.874,1.874,0,1,1,9.5,17.622,1.874,1.874,0,0,1,7.622,19.5Z"
            transform="translate(-7.063 -26.436)"
          ></path>
        </g>
      </g>
    </svg>
  );
}
