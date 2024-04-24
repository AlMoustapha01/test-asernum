import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function WalletIcon({ ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="19.474"
      height="17.751"
      viewBox="0 0 19.474 17.751"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_317"
            data-name="Rectangle 317"
            width="19.474"
            height="17.751"
            fill="#767676"
          />
        </clipPath>
      </defs>
      <g id="Groupe_236" data-name="Groupe 236" transform="translate(0)">
        <g
          id="Groupe_234"
          data-name="Groupe 234"
          transform="translate(0)"
          clipPath="url(#clip-path)"
        >
          <path
            id="Tracé_122"
            data-name="Tracé 122"
            d="M18.422,131.245v.295c0,.477,0,.954,0,1.431a2.758,2.758,0,0,1-2.792,2.786q-6.191,0-12.381,0a4.087,4.087,0,0,1-1.4-.157A2.762,2.762,0,0,1,0,132.973c0-2.774,0-5.548,0-8.323a3.5,3.5,0,0,1,.2-1.361,2.764,2.764,0,0,1,2.566-1.728q6.432,0,12.863,0a2.743,2.743,0,0,1,2.7,2.075,2.966,2.966,0,0,1,.085.663c.012.555,0,1.109,0,1.664,0,.028,0,.057-.009.1H15.7a2.586,2.586,0,0,0-.235,5.165c.924.031,1.849.01,2.774.012h.184"
            transform="translate(0 -118.007)"
            fill="#767676"
          />
          <path
            id="Tracé_123"
            data-name="Tracé 123"
            d="M466.573,292.279c.486,0,.973,0,1.459,0a.906.906,0,0,1,.96.96q0,1.145,0,2.291a.9.9,0,0,1-.949.958c-.978,0-1.955.008-2.933,0a2.1,2.1,0,0,1-.055-4.2c.505-.018,1.012,0,1.517,0v0m-1.438,2.844v-.01c.078,0,.156,0,.233,0a.729.729,0,0,0-.034-1.458c-.141,0-.282,0-.422,0a.726.726,0,0,0-.124,1.435,3.1,3.1,0,0,0,.347.032"
            transform="translate(-449.52 -283.733)"
            fill="#767676"
          />
          <path
            id="Tracé_124"
            data-name="Tracé 124"
            d="M232.826,2.991q2.429-1.4,4.859-2.805a1.238,1.238,0,0,1,1.748.471c.1.163.189.328.295.512l-6.9,1.848,0-.027"
            transform="translate(-226.02 0)"
            fill="#767676"
          />
          <path
            id="Tracé_125"
            data-name="Tracé 125"
            d="M301.2,56.416h-6.9l-.006-.017c.036-.013.072-.029.109-.039q2.519-.675,5.039-1.349a1.292,1.292,0,0,1,1.639.937c.041.149.079.3.123.468"
            transform="translate(-285.691 -53.352)"
            fill="#767676"
          />
        </g>
      </g>
    </svg>
  );
}
