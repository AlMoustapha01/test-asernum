import React from "react";
import { Input, InputProps } from "@nextui-org/react";
import { IoMdKey } from "react-icons/io";
import clsx from "clsx";

interface PasswordInputProps extends InputProps {}
export default function PasswordInput({ ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          <IoMdKey
            className={`text-2xl ${isVisible? 'text-gray-500 dark:text-gray-600' : 'text-gray-800 dark:text-gray-100'}`}
          />
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
}
