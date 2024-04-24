"use client";
import Logo from "@/assets/images/ICON PAYNAH PRO.png";
import { enterprises, userData } from "@/data/user";
import { useTranslations } from "next-intl";
import Image from "next/image";
import EnterpriseSelector from "../EnterPriseSelector";
export default function Header() {
  const t = useTranslations("Dashboard");

  return (
    <header className=" bg-white border-b border-[#d2d3d3] py-2" role="banner">
      <div className="max-w-screen-2xl 2xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <Image className="w-16 h-16" src={Logo} alt="logo paynah pro" />
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
                  strong: (chunks) => (
                    <strong>{userData.balance_available}</strong>
                  ),
                })}
                FCFA
              </p>
            </div>
            <div>
              <EnterpriseSelector data={enterprises} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
