import Image from "next/image";
import LogoWhite from "@/assets/images/PAYNAH-PRO LETTERMARK-BLACK.png";

export default function AppLogo({ className }: { className: string }) {
  return <Image className={className} src={LogoWhite} alt="Logo Paynah" />;
}
