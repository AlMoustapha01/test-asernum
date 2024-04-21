"use client"
import Logo from "@/assets/images/ICON PAYNAH PRO.png";
import { enterprises, userData } from "@/data/user";
import { useTranslations } from "next-intl";
import Image from "next/image";
import EnterpriseSelector from "../EnterPriseSelector";
export default function Header() {
  const t = useTranslations("Dashboard");

  return (
    <header
      className="flex w-[95%] justify-between items-center p-5 mx-auto overflow-hidden"
      role="banner"
    >
      <div>
        <Image className="w-16 h-16" src={Logo} alt="logo paynah pro" />
      </div>
      <div className="flex md:flex-row flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p>
            {t.rich("header.balance", {
              strong: (chunks) => <strong>{userData.balance}</strong>,
            })}
            FCFA
          </p>
          <p>
            {t.rich("header.balance-available", {
              strong: (chunks) => <strong>{userData.balance_available}</strong>,
            })}
            FCFA
          </p>
        </div>
        <div>
            <EnterpriseSelector data={enterprises} />
        </div>
      </div>
    </header>
  );
}
