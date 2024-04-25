import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { clsx } from "clsx";
import { IoMdKey } from "react-icons/io";

interface InputTextProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isInvalid?: boolean;
  isPassword?: boolean;
  label?: string; // Label prop
}

export default function InputTextLabelFloat({
  isInvalid,
  isPassword,
  label,
  ...props
}: Readonly<InputTextProps>) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="relative">
      <input
        type={isPassword ? (isVisible ? "text" : "password") : props.type}
        id={label ? label : undefined}
        className={clsx(
          "block px-5 py-[12px] w-full text-sm rounded-xl font-light text-gray-900 bg-gray-light focus:border focus:bg-white border-gray-300 appearance-none focus:outline-none focus:ring-0 peer",
          isInvalid &&
            "bg-white border border-danger focus:ring-1 focus:ring-danger",
          props.value &&
            "bg-white border border-gray-light focus:ring-1 focus:ring-gray-light",
          "group-data-[focused=true]:bg-gray-light group-data-[focused=true]:border-0",
          "placeholder:text-[#626262]"
        )}
        placeholder=" "
        {...props}
      />
      {isPassword && (
        <button
          className="focus:outline-none absolute top-[25%] right-4"
          type="button"
          onClick={toggleVisibility}
        >
          <IoMdKey
            className={`text-2xl ${
              !isVisible ? "text-gray-medium " : "text-gray-800"
            }`}
          />
        </button>
      )}
      <label
        htmlFor={label}
        className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:left-4 left-4 start-1"
      >
        {label}
      </label>
    </div>
  );
}
