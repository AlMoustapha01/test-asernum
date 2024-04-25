"use client";

import { Tooltip } from "@nextui-org/react";
import FooterNavButton from "../FooterNavButton";
import { useTranslations } from "next-intl";
import AppLogo from "../AppLogo";
import Link from "next/link";
import SpaceIcon from "../Icons/SpaceIcon";
import IntegrationIcon from "../Icons/IntegrationIcon";
import LinkIcon from "../Icons/LinkIcon";
import TransactionIcon from "../Icons/TransactionIcon";
import LocationIcon from "../Icons/LocationIcon";
import DownloadIcon from "../Icons/DownloadIcon";
import AccountIcon from "../Icons/AccountIcon";
import SendIcon from "../Icons/SendIcon";
import CogIcon from "../Icons/CogIcon";
import LogoutIcon from "../Icons/LogoutIcon";

import NotificationIcon from "../Icons/NotificationIcon";
import Icon from "../Icon";

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
                  icon={
                    <SpaceIcon
                      strokeWidth={2}
                      className={`w-6 h-6 ${
                        isActive ? "fill-white" : "fill-[#afafaf]"
                      } `}
                    />
                  }
                  message={"Serenity space"}
                  link="/dashboard"
                  isActive
                />
                <FooterNavButton
                  icon={<SendIcon strokeWidth={2} className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("sendMoney")}
                  link="/dashboard"
                />

                <FooterNavButton
                  icon={<LinkIcon strokeWidth={2} className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("paymentLink")}
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<AccountIcon strokeWidth={2} className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("account")}
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<TransactionIcon strokeWidth={2} className="w-6 h-6 fill-[#afafaf]" />}
                  message="Transactions"
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<LocationIcon className="w-6 h-6 fill-[#afafaf]" />}
                  message={t("salesPoints")}
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<DownloadIcon strokeWidth={2} className="w-6 h-6 fill-[#afafaf]" />}
                  message="Approvisionnement"
                  link="/dashboard"
                />
                <FooterNavButton
                  icon={<IntegrationIcon strokeWidth={2} className="w-6 h-6 fill-[#afafaf]" />}
                  message="Intégration"
                  link="/dashboard"
                />
              </div>
              <div className="flex items-center gap-4">
                <button>
                  <NotificationIcon className="h-6 w-6 fill-[#afafaf] hover:fill-black duration-200 transition-all " />
                </button>
                <button>
                  <CogIcon className="h-6 w-6 fill-[#afafaf] hover:fill-black duration-200 transition-all " />
                </button>
                <Tooltip content={"Deconnexion"}>
                  <button>
                    <LogoutIcon className="h-6 w-6 text-[#afafaf] hover:text-red-400 duration-200 transition-all " />
                  </button>
                </Tooltip>
                <button className="p-3 rounded-xl bg-[#ffc5b0] font-medium text-[#fe733c]">
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
