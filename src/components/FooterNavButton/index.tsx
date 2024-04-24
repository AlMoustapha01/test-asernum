import { Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { clsx } from 'clsx';

interface Props {
  icon: ReactNode;
  message: string;
  link: string;
  isActive?:boolean
}
export default function FooterNavButton({ icon, link,isActive, message }: Props) {
  return (
    <Tooltip content={message}>
      <Link className={
        clsx(
          "p-3 aspect-square rounded-xl",
          isActive ? "bg-black hover:bg-black" : "bg-gray-100 hover:bg-gray-200",
          
         
        )
      } href={link}>
        {icon}
      </Link>
    </Tooltip>
  );
}
