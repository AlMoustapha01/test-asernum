"use client";
import LogoWhite from "@/assets/images/PAYNAH-PRO LETTERMARK-BLACK.png";
import LogoDark from "@/assets/images/W-PAYNAH-PRO-LETTERMARK.png";
import { useTheme } from "next-themes";
import Image from "next/image";
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
import AppLogo from "../AppLogo";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Dashboard");
  const { theme } = useTheme();

  return (
    <footer className="fixed inset-x-0 bottom-5 z-[90] bg-transparent">
      <div className="relative">
        <div className="max-w-screen-2xl 2xl:max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 rounded-3xl">
          <nav className="bg-white py-3 px-6 rounded-3xl border border-[#f4f4f7]">
            <div className="flex justify-between items-center">
              <div className="">
                <Link className="block relative h-[3.5rem] w-[8rem]" href={"/"}>
                  <AppLogo className="absolute object-contain w-full h-full top-0 bottom-0 right-0 left-0" />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <FooterNavButton icon={Send} message={t("sendMoney")} popover />
                <FooterNavButton
                  icon={Repetition}
                  message={t("paymentLink")}
                  popover
                />
                <FooterNavButton
                  icon={AccountIcon}
                  message={t("account")}
                  popover
                />
                <FooterNavButton
                  icon={Transactions}
                  message="Transactions"
                  popover
                />
                <FooterNavButton
                  icon={Point}
                  message={t("salesPoints")}
                  popover
                />
                <FooterNavButton
                  icon={Appro}
                  message="Approvisionnement"
                  popover
                />
                <FooterNavButton
                  icon={Integration}
                  message="Intégration"
                  popover
                />
              </div>
              <div className="flex items-center gap-4">
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
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
