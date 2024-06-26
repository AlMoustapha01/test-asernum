import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function SpaceIcon({ ...props }: IconProps) {
  return (
    <svg {...props} viewBox="0 0 18.883 19.25">
      <defs>
        <clipPath id="a">
          <rect width="18.883" height="19.25"></rect>
        </clipPath>
      </defs>
      <g transform="translate(0 0)">
        <g transform="translate(0 0)" clipPath="url(#a)">
          <path
            d="M4.642,0C1.171,0,0,1.194,0,4.732S1.171,9.463,4.642,9.463,9.284,8.269,9.284,4.732,8.113,0,4.642,0"
            transform="translate(0 0)"
          ></path>
          <path
            d="M49.388,9.463c3.471,0,4.642-1.194,4.642-4.732S52.859,0,49.388,0s-4.642,1.194-4.642,4.731,1.171,4.732,4.642,4.732"
            transform="translate(-35.147 0)"
          ></path>
          <path
            d="M4.642,45.623C1.171,45.623,0,46.817,0,50.355s1.171,4.731,4.642,4.731,4.642-1.194,4.642-4.731-1.171-4.732-4.642-4.732"
            transform="translate(0 -35.836)"
          ></path>
          <path
            d="M49.388,45.623c-3.471,0-4.642,1.194-4.642,4.732s1.171,4.731,4.642,4.731,4.642-1.194,4.642-4.731-1.171-4.732-4.642-4.732"
            transform="translate(-35.147 -35.836)"
          ></path>
        </g>
      </g>
    </svg>
  );
}
