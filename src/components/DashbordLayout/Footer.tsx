"use client";
import LogoWhite from "@/assets/images/PAYNAH-PRO LETTERMARK-BLACK.png";
import LogoDark from "@/assets/images/W-PAYNAH-PRO-LETTERMARK.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { IoNotifications } from "react-icons/io5";
import { FaCog } from "react-icons/fa";
import FooterNavButton from "../FooterNavButton";
import AccountIcon from "@/assets/ASSET DASHBOARD/10a38a4201d6ae9383f151042ecd24ef.svg";
import Appro from "@/assets/ASSET DASHBOARD/223ed637876b0981285cd3161e3297dd.svg";
import Repetition from "@/assets/ASSET DASHBOARD/Grille de répétition 8.svg";
import Transactions from "@/assets/ASSET DASHBOARD/Groupe 118.svg";
import Integration from "@/assets/ASSET DASHBOARD/Groupe 122.svg";
import Point from "@/assets/ASSET DASHBOARD/Groupe 128.svg";
import Send from "@/assets/ASSET DASHBOARD/Groupe 460.svg";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Dashboard")
  const { theme } = useTheme();
  return (
    <footer className="flex w-[90%] justify-between items-center p-5 mx-auto">
      <div>
        <Image
          className="w-28"
          src={theme == "light" ? LogoWhite : LogoDark}
          alt="Logo Paynah"
        />
      </div>
      <div className="flex items-center gap-4">
        <FooterNavButton icon={Send} popoverMessage={t('sendMoney')} />
        <FooterNavButton icon={Repetition} popoverMessage={t('paymentLink')} />
        <FooterNavButton icon={AccountIcon} popoverMessage={t('account')} />
        <FooterNavButton icon={Transactions} popoverMessage="Transactions" />
        <FooterNavButton icon={Point} popoverMessage={t('salesPoints')} />
        <FooterNavButton icon={Appro} popoverMessage="Approvisionnement" />
        <FooterNavButton icon={Integration} popoverMessage="Intégration" />
      </div>
      <div className="flex items-center gap-4">
      <LocaleSwitcher />
        <ThemeSwitcher className="text-gray-400 hover:text-black" />
        <button>
          <IoNotifications className="h-8 w-8 text-gray-400 hover:text-black " />
        </button>
        <button>
          <FaCog className="h-8 w-8 text-gray-400 hover:text-black " />
        </button>
        <button className="p-3 rounded-xl bg-orange-100 text-orange-300">
          <p>JV</p>
        </button>
      </div>
    </footer>
  );
}
