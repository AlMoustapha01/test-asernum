import { Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";

interface Props {
  icon: any;
  popoverMessage: string;
}
export default function FooterNavButton({ icon, popoverMessage }: Props) {
  return (
    <Tooltip content={popoverMessage}>
      <Button className="p-3 hover:bg-black hover:text-white" variant="flat" isIconOnly>
        <Image  src={icon} alt={popoverMessage} width={24} height={24} />
      </Button>
    </Tooltip>
  );
}
