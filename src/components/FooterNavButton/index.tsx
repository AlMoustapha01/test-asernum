import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";
import { clsx } from 'clsx';

interface Props {
  icon: ReactNode;
  message: string;
  link: string;
  isActive?:boolean
}
export default function FooterNavButton({ icon, link,isActive, message }: Readonly<Props>) {
  return (
    <Tooltip content={message}>
      <Link className={
        clsx(
          "p-3 aspect-square rounded-xl duration-200 transition-all ",
          isActive ? "bg-black hover:bg-black" : "bg-[#fafafa] hover:bg-[#eaeaea]",
        )
      } href={link}>
        {icon}
      </Link>
    </Tooltip>
  );
}
