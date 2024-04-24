import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function NotificationIcon({ ...props }: IconProps) {
  return (
    <svg
      {...props}
      id="Composant_303_21"
      data-name="Composant 303 – 21"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="21.772"
      height="25.415"
      viewBox="0 0 21.772 25.415"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_239"
            data-name="Rectangle 239"
            width="21.772"
            height="25.415"
            fill="#afafaf"
          />
        </clipPath>
      </defs>
      <g id="Groupe_125" data-name="Groupe 125" clip-path="url(#clip-path)">
        <path
          id="Tracé_110"
          data-name="Tracé 110"
          d="M261.4,659.373a2.974,2.974,0,0,0-5.118-.022l-.05.083-.006.1a2.471,2.471,0,0,0,2.314,2.618l.357.022q.077,0,.153,0a2.474,2.474,0,0,0,2.464-2.319h0a.845.845,0,0,0-.115-.482"
          transform="translate(-247.988 -636.759)"
          fill="#afafaf"
        />
        <path
          id="Tracé_111"
          data-name="Tracé 111"
          d="M21.666,19.309a1.952,1.952,0,0,1-.691.969,2.17,2.17,0,0,1-1.3.405H13.265a5.35,5.35,0,0,0-5.062,0H2.07a2.141,2.141,0,0,1-1.274-.4A2.012,2.012,0,0,1,.788,17.1c.292-.234.6-.451.895-.677a1.588,1.588,0,0,0,.636-1.038c.355-2.146.74-4.286,1.056-6.437A7.6,7.6,0,0,1,6.956,3.289a9.879,9.879,0,0,1,1.468-.7c.2-.083.283-.157.285-.386A2.247,2.247,0,0,1,9.6.408,2.05,2.05,0,0,1,10.54.024,2.22,2.22,0,0,1,12.2.433a2.212,2.212,0,0,1,.855,1.745c.006.25.091.334.313.418a7.43,7.43,0,0,1,4.963,6.049c.382,2.244.745,4.491,1.117,6.737a1.571,1.571,0,0,0,.617,1.021c.269.208.543.41.814.614a2,2,0,0,1,.787,2.291"
          transform="translate(0 -0.001)"
          fill="#afafaf"
        />
      </g>
    </svg>
  );
}