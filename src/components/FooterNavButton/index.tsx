import { Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";

interface Props {
  icon: any;
  message: string;
  popover: boolean;
}
export default function FooterNavButton({ icon, message, popover }: Props) {
  return (
    <Tooltip content={message}>
      <Button
        className="p-3 hover:bg-black hover:text-white"
        variant="flat"
        isIconOnly={popover}
        startContent={
          !popover && <Image src={icon} alt={message} width={24} height={24} />
        }
      >
        {popover ? (
          <Image src={icon} alt={message} width={24} height={24} />
        ) : (
          <p>{message}</p>
        )}
      </Button>
    </Tooltip>
  );
}
