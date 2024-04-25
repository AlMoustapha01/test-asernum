"use client";
import AccountCard from "@/components/AccountCard";
import DashboardLayout from "@/components/DashbordLayout";
import {
  Button,
  Input,
  Select,
  SelectItem,
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
import Icon from "@/components/Icon";
import InputTextLabelFloat from "@/components/InputLabelFloat";
export default function DashbordPage() {
  const t = useTranslations("Dashboard");

  const accounts = [
    { title: "Salaire Corporate", balance: 2873456 },
    { title: "Salaire pompiste", balance: 1873456 },
    { title: "Factures", balance: 6873456 },
  ];

  const debits = [
    {
      label: "Compte principale",
      value: "Compte principale",
    },
    {
      label: "Salariale",
      value: "Salariale",
    },
  ];

  return (
    <DashboardLayout>
      <div className="pb-10">
        <div className="xl:flex md:grid md:grid-cols-2 justify-between items-center">
          <p className="text-lg text-[#767676] tracking-tight">
            {t("serenitySpace")}
          </p>
          <div className="flex gap-2 items-center bg-white dark:bg-black p-1 px-4 rounded-lg">
            <p className="text-nowrap whitespace-nowrap text-xs">
              {t("doYouHaveConcerns")}
            </p>
            <Input
              placeholder="Ecrivez votre question"
              endContent={<BsFillSendFill className="text-gray-300" />}
            ></Input>
          </div>
        </div>
        <div className="flex flex-grow gap-3 mt-2.5">
          <div className="w-[25%] space-y-3 h-full">
            <CreditCard />
            <div className="flex flex-col w-full xl:h-[30rem] bg-white dark:bg-black bg-cover rounded-xl p-2">
              <div>
                <h1 className="font-medium text-base">
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
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <label
                        className="absolute left-4 top-[-9px] z-40 bg-white"
                        htmlFor="country"
                      >
                        Comptes à créditer
                      </label>
                      <Select
                        defaultSelectedKeys={[debits[0].value]}
                        className="border-black"
                        variant="bordered"
                        classNames={{
                          trigger:
                            "py-6 bg-white border border-gray-light hover:bg-white",
                        }}
                      >
                        {debits.map((cur) => (
                          <SelectItem key={cur.value} value={cur.value}>
                            {cur.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>

                    <div className="relative">
                      <InputTextLabelFloat label={t("amount")} />
                      <div className="absolute right-0 top-0 h-full">
                        <Button className="bg-black text-white rounded-lg h-full">
                          <Icon name="send" className="text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  key="Rechargement"
                  title="Rechargement"
                  className="w-full h-full text-[11px]"
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <p className="text-xs text-[#7d7d7d] mt-1">
                      Bientôt disponible
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="w-[50%] h-full">
            <div className="flex space-x-2.5 2xl:min-h-[10rem] snap-x snap-mandatory overflow-x-auto">
              {accounts.map((account) => (
                <AccountCard
                  key={account.title}
                  title={account.title}
                  balance={account.balance}
                />
              ))}
              <button className="snap-end shrink-0 w-[30%] 2xl:w-[24%] border border-dashed border-[#959596] flex flex-col justify-center items-center space-y-8 2xl:space-y-8 p-4 rounded-3xl text-[#767676]">
                <span className="text-gray-700">{t("addAccount")}</span>
              </button>
            </div>
            <div className="mt-4 bg-white dark:bg-black rounded-xl p-3 h-full">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <p className="text-gray-700 text-lg font-semibold">
                    {t("recentTransactions")}
                  </p>
                  <Select
                    defaultSelectedKeys={[debits[0].value]}
                    className="w-48 border-black"
                  >
                    {debits.map((cur) => (
                      <SelectItem key={cur.value} value={cur.value}>
                        {cur.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

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
          <div className="w-[25%] space-y-6 h-full">
            <div className="flex flex-col space-y-2 p-4 m-auto rounded-xl bg-white xl:h-[22rem]">
              <div>
                <div className="flex justify-between items-center h-full">
                  <p className="font-medium text-sm 2xl:text-base">
                    {t("salesPoints")}
                  </p>
                  <Button
                    variant="light"
                    className="inline-flex text-xs text-[#909090] hover:underline duration-200 mb-1"
                    endContent={<IoIosArrowForward className="text-gray-500" />}
                  >
                    {t("seeAll")}
                  </Button>
                </div>
                <div className="border-t-2 border-dashed border-gray-light" />
              </div>

              <div className="h-full flex justify-center items-center">
                <div className="inline-flex flex-col justify-center">
                  <Image
                    src={SellPointEmpty}
                    className="h-[4rem] w-auto"
                    alt="Sell Point Empty"
                  />
                  <p className="text-xs text-[#7d7d7d] mt-1">
                    Aucun point de vente retrouvé
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 p-4 m-auto rounded-xl bg-white xl:h-[22rem]">
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm 2xl:text-base">
                    {t("pendingApprovals")}
                  </p>
                  <Button
                    variant="light"
                    className="inline-flex text-xs text-[#909090] hover:underline duration-200 mb-1"
                    endContent={<IoIosArrowForward className="text-gray-500" />}
                  >
                    {t("seeAll")}
                  </Button>
                </div>
                <div className="border-t-2 border-dashed border-gray-light" />
              </div>

              <div className="h-full flex justify-center items-center">
                <div className="inline-flex flex-col justify-center">
                  <Image
                    src={SellApprobEmpty}
                    className="h-[4rem] w-auto"
                    alt="Sell Approbation Empty"
                  />
                  <p className="text-xs text-[#7d7d7d] mt-1">
                    Aucun point de vente retrouvé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
