"use client";

import { useTheme } from "next-themes";
import { IoNotifications } from "react-icons/io5";
import { FaCog } from "react-icons/fa";
import FooterNavButton from "../FooterNavButton";
import { useTranslations } from "next-intl";
import AppLogo from "../AppLogo";
import Link from "next/link";
import SpaceIcon from "../Icon/SpaceIcon";
import IntegrationIcon from "../Icon/IntegrationIcon";
import LinkIcon from "../Icon/LinkIcon";
import TransactionIcon from "../Icon/TransactionIcon";
import LocationIcon from "../Icon/LocationIcon";
import DownloadIcon from "../Icon/DownloadIcon";
import AccountIcon from "../Icon/AccountIcon";
import SendIcon from "../Icon/SendIcon";

export default function Footer() {
  const t = useTranslations("Dashboard");

  const isActive = true;
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
                <FooterNavButton
                  icon={<SpaceIcon className={`w-6 h-6 ${isActive ? "fill-white":"fill-[#afafaf]" } `}/>}
                  message={"Serenity space"}
                  link="/dashboard"
                  isActive
                />
                <FooterNavButton
                  icon={<SendIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("sendMoney")}
                  link="/dashboard"
                />

                <FooterNavButton
                  icon={<LinkIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("paymentLink")}
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<AccountIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("account")}
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<TransactionIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message="Transactions"
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<LocationIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("salesPoints")}
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<DownloadIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message="Approvisionnement"
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<IntegrationIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message="Intégration"
                  link="/dashboard"
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
