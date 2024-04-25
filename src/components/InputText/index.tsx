import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { clsx } from "clsx";
import KeyIcon from "../Icons/KeyIcon";

interface InputTextProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isInvalid?: boolean;
  isPassword?: boolean;
}
export default function InputText({
  isInvalid,
  isPassword,
  ...props
}: InputTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isInvalid);
  
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="relative">
      <input
        type={isPassword ? (isVisible ? "text" : "password") : props.type}
        className={clsx(
          "bg-gray-light font-light focus:border-0 focus:outline-none  text-sm px-5 py-[16px] w-full rounded-xl",
          isInvalid && "bg-white border border-danger focus:ring-1 focus:ring-danger",
          props.value && !isInvalid && "bg-white border border-gray-light focus:ring-1 focus:ring-gray-light",
         
          "group-data-[focused=true]:bg-gray-light group-data-[focused=true]:border-0",
          "placeholder:text-[#626262]"
        )}
        {...props}
      />
      {isPassword && (
        <button
          className="focus:outline-none absolute top-[25%] right-4"
          type="button"
          onClick={toggleVisibility}
        >
          <KeyIcon
            width={30}
            height={30}
            className={`text-2xl ${
              !isVisible ? "fill-gray-medium " : "fill-gray-800"
            }`}
          />
        </button>
      )}
    </div>
  );
}
