"use client";
import AccountCard from "@/components/AccountCard";
import DashboardLayout from "@/components/DashbordLayout";
import {
  Button,
  Input,

  Tab,
  Tabs,
} from "@nextui-org/react";

import SellPointEmpty from "@/assets/ASSET DASHBOARD/Groupe 298.svg";
import SellApprobEmpty from "@/assets/ASSET DASHBOARD/Groupe 305.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import TransactionTable from "@/components/Datatable";
import { useTranslations } from "next-intl";
import CreditCard from "@/components/CreditCard";
import Operation from "@/components/Operation";
export default function DashbordPage() {
  const t = useTranslations("Dashboard");

  const accounts = [
    { title: "Salaire Corporate", balance: 2873456 },
    { title: "Salaire pompiste", balance: 1873456 },
    { title: "Factures", balance: 6873456 },
  ];

  return (
    <DashboardLayout>
      <div className=" overflow-hidden">
        <div className="xk-l:flex md:grid md:grid-cols-2 justify-between items-center">
          <p className="text-gray-700 font-semibold">{t("serenitySpace")}</p>
          <div className="flex gap-2 items-center bg-white dark:bg-black p-1 px-4 rounded-lg">
            <p className="text-nowrap whitespace-nowrap">
              {t("doYouHaveConcerns")}
            </p>
            <Input
              placeholder="Ecrivez votre question"
              endContent={<BsFillSendFill className="text-gray-300" />}
            ></Input>
          </div>
        </div>
        <div className="xl:flex gap-2 mt-3">
          <div className="xl:w-3/12 xl:order-first md:order-last space-y-3">
            <CreditCard />
            <div className="flex flex-col w-full bg-white dark:bg-black bg-cover rounded-xl h-3/4 p-2">
              <div>
                <h1 className="text-gray-700 text-start font-semibold text-xl p-2">
                  {t("quickActions")}
                </h1>
              </div>

              <Tabs aria-label="Options">
                <Tab
                  key="send"
                  title={t("sendMoney")}
                  className="w-full text-[11px]"
                >
                  <Operation />
                </Tab>
                <Tab
                  key="paiment"
                  title="Lien de paiment"
                  className="w-full text-[11px]"
                >
                  <Operation />
                </Tab>
                <Tab
                  key="Rechargement"
                  title="Rechargement"
                  className="w-full text-[11px]"
                >
                  <Operation />
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="xl:w-7/12">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
              {accounts.map((account) => (
                <AccountCard
                  key={account.title}
                  title={account.title}
                  balance={account.balance}
                />
              ))}
              <button className="border-2 border-dashed border-gray-400 rounded-xl p-4 flex items-center justify-center md:w-52 w-full md:h-full h-36">
                <span className="text-gray-700">{t("addAccount")}</span>
              </button>
            </div>
            <div className="mt-4 bg-white dark:bg-black rounded-xl p-3">
              <div className="flex justify-between items-center ">
                <p className="text-gray-700 text-lg font-semibold">
                  {t("recentTransactions")}
                </p>
                <Button
                  variant="light"
                  endContent={<IoIosArrowForward className="text-gray-500" />}
                >
                  {t("seeAll")}
                </Button>
              </div>
              <TransactionTable />
            </div>
          </div>
          <div className="xl:w-3/12 space-y-4">
            <div className="p-4 mx-auto rounded-lg bg-white dark:bg-black">
              <div className="flex justify-between items-center">
                <p className="text-gray-700 text-lg font-semibold">
                  {t("salesPoints")}
                </p>
                <Button
                  variant="light"
                  endContent={<IoIosArrowForward className="text-gray-500" />}
                >
                  {t("seeAll")}
                </Button>
              </div>
              <div className="flex justify-center items-center p-10">
                <Image
                  src={SellPointEmpty}
                  className="w-[200px]"
                  alt="Sell Point Empty"
                />
              </div>
            </div>
            <div className="p-4 mx-auto rounded-lg bg-white dark:bg-black">
              <div className="flex justify-between items-center ">
                <p className="text-gray-700 text-lg font-semibold">
                  {t("pendingApprovals")}
                </p>
                <Button
                  variant="light"
                  endContent={<IoIosArrowForward className="text-gray-500" />}
                >
                  {t("seeAll")}
                </Button>
              </div>
              <div className="flex justify-center items-center py-10">
                <Image
                  src={SellApprobEmpty}
                  className="w-[200px]"
                  alt="Sell Approbation Empty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
