"use client";
import { userData } from "@/data/user";
import { useTranslations } from "next-intl";
import EnterpriseSelector from "../EnterPriseSelector";
import logoTotal from "@/assets/images/Logo_TotalEnergies.png";
import DashboardAppLogo from "../Icons/DashboardAppLogo";

export default function Header() {
  const t = useTranslations("Dashboard");

  return (
    <header className="bg-white border-b border-[#d2d3d3]" role="banner">
      <div className="max-w-screen-2xl 2xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <DashboardAppLogo />
          <div className="flex md:flex-row flex-col items-center 2xl:space-x-32 xl:space-x-28">
            <div className="flex flex-col gap-1">
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
              <EnterpriseSelector
                data={{
                  name: "Total Energie CI",
                  code: "Npa487738CI",
                  icon: logoTotal,
                }}
              />
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
}
