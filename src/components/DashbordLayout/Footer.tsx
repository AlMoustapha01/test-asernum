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
import FloatButton from "../FloatingButton";
import { useMediaQuery } from "@/hooks/media-query";

export default function Footer() {
  const t = useTranslations("Dashboard");
  const { theme } = useTheme();

  const IsMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer className="flex md:flex-row flex-col gap-5 w-[90%] justify-between items-center p-5 mx-auto">
      <div className="xl:order-first md:order-last order-last">
        <Image
          className="w-28"
          src={theme == "light" ? LogoWhite : LogoDark}
          alt="Logo Paynah"
        />
      </div>
      {IsMobile && (
        <FloatButton>
          <div className="flex flex-col gap-4">
            <FooterNavButton
              icon={Send}
              message={t("sendMoney")}
              popover={false}
            />
            <FooterNavButton
              icon={Repetition}
              message={t("paymentLink")}
              popover={false}
            />
            <FooterNavButton
              icon={AccountIcon}
              message={t("account")}
              popover={false}
            />
            <FooterNavButton
              icon={Transactions}
              message="Transactions"
              popover={false}
            />
            <FooterNavButton
              icon={Point}
              message={t("salesPoints")}
              popover={false}
            />
            <FooterNavButton
              icon={Appro}
              message="Approvisionnement"
              popover={false}
            />
            <FooterNavButton
              icon={Integration}
              message="Intégration"
              popover={false}
            />
          </div>
        </FloatButton>
      )}
      {!IsMobile && (
        <div className="flex items-center gap-4">
          <FooterNavButton icon={Send} message={t("sendMoney")} popover />
          <FooterNavButton
            icon={Repetition}
            message={t("paymentLink")}
            popover
          />
          <FooterNavButton icon={AccountIcon} message={t("account")} popover />
          <FooterNavButton icon={Transactions} message="Transactions" popover />
          <FooterNavButton icon={Point} message={t("salesPoints")} popover />
          <FooterNavButton icon={Appro} message="Approvisionnement" popover />
          <FooterNavButton icon={Integration} message="Intégration" popover />
        </div>
      )}
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
