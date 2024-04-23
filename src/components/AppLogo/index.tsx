import Image from "next/image";
import LogoWhite from "@/assets/images/PAYNAH-PRO LETTERMARK-BLACK.png";

export default function AppLogo() {
  return <Image className="w-[124px]" src={LogoWhite} alt="Logo Paynah" />;
}
