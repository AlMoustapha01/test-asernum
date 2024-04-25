import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { clsx } from "clsx";
import { KeyIcon } from "lucide-react";

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
            className={`text-2xl ${
              !isVisible ? "text-gray-medium " : "text-gray-800"
            }`}
          />
        </button>
      )}
    </div>
  );
}
