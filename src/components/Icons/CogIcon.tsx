import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {}

export default function CogIcon({ ...props }: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 19.004 20"
    >
      <path
        d="M10.214,0a2.016,2.016,0,0,1,1.46.57,1.936,1.936,0,0,1,.6,1.42,2.014,2.014,0,0,0,2.041,1.991,2.127,2.127,0,0,0,1.01-.271,2.048,2.048,0,0,1,2.729.74h0l.681,1.17A2.013,2.013,0,0,1,19,6.61a1.971,1.971,0,0,1-1.019,1.72,2,2,0,0,0-.75.731,1.96,1.96,0,0,0,.75,2.67,1.978,1.978,0,0,1,.75,2.7h0l-.681,1.131a2.025,2.025,0,0,1-1.75,1,1.99,1.99,0,0,1-1.019-.271,2.193,2.193,0,0,0-1.021-.27,2.035,2.035,0,0,0-1.439.59,1.935,1.935,0,0,0-.6,1.41A2.01,2.01,0,0,1,10.184,20H8.815a2.014,2.014,0,0,1-1.421-.59,1.966,1.966,0,0,1-.579-1.4,2,2,0,0,0-2.03-1.99,1.981,1.981,0,0,0-1.041.291,2.149,2.149,0,0,1-1.55.2,2.087,2.087,0,0,1-1.24-.93h0L.315,14.45a1.949,1.949,0,0,1-.25-1.56,2.025,2.025,0,0,1,.989-1.25,1.941,1.941,0,0,0,.75-.73,1.979,1.979,0,0,0-.75-2.67A1.947,1.947,0,0,1,.315,5.57h0L.954,4.45A2.038,2.038,0,0,1,2.2,3.5a2.066,2.066,0,0,1,1.56.21,2.179,2.179,0,0,0,1.021.26,2.067,2.067,0,0,0,1.439-.58,1.961,1.961,0,0,0,.591-1.4A2.012,2.012,0,0,1,8.854,0h1.36Zm.4,7.481a2.853,2.853,0,0,0-3.071.589,2.7,2.7,0,0,0-.61,2.991,2.794,2.794,0,0,0,2.59,1.7h.011a2.749,2.749,0,0,0,1.979-.8,2.694,2.694,0,0,0,.83-1.94A2.725,2.725,0,0,0,10.615,7.481Z"
        transform="translate(0)"
      ></path>
    </svg>
  );
}
