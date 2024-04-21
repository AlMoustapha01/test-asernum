"use client";
import AccountCard from "@/components/AccountCard";
import BeneficiarySelector, {
  Beneficiary,
} from "@/components/BeneficiarySelector";
import DashboardLayout from "@/components/DashbordLayout";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Moov from "@/assets/images/MOOV MONEY.png";
import Mtn from "@/assets/images/MTN MOMO.png";
import Orange from "@/assets/images/ORANGE-MONEY.png";

import SellPointEmpty from "@/assets/ASSET DASHBOARD/Groupe 298.svg";
import SellApprobEmpty from "@/assets/ASSET DASHBOARD/Groupe 305.svg";
import LockIconDark from "@/assets/images/padlock.png";

import Wave from "@/assets/images/WAVE.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import TransactionTable from "@/components/Datatable";
import { userData } from "@/data/user";
import { useTranslations } from "next-intl";
export default function DashbordPage() {
  const t = useTranslations("Dashboard");

  const accounts = [
    { title: "Salaire Corporate", balance: 2873456 },
    { title: "Salaire pompiste", balance: 1873456 },
    { title: "Factures", balance: 6873456 },
  ];
  const beneficiaries: Beneficiary[] = [
    { initials: "AD", color: "bg-red-200" },
    { initials: "DB", color: "bg-green-200" },
    { initials: "DZ", color: "bg-blue-200" },
    { initials: "BM", color: "bg-yellow-200" },
    // Add more beneficiaries
  ];
  const sendingModes = ["Direct", "Mobile money", "Virement"];

  const currencies = [
    {
      value: "FCFA",
      label: "FCFA",
    },
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
    {
      value: "GBP",
      label: "GBP",
    },
    {
      value: "JPY",
      label: "JPY",
    },
  ];
  const Paiments = () => {
    return (
      <div className="flex gap-1">
        <button>
          <Image src={Moov} className="w-8 h-8 rounded-lg" alt="Moov Money" />
        </button>
        <button>
          <Image src={Mtn} className="w-8 h-8 rounded-lg" alt="MTN MOMO" />
        </button>
        <button>
          <Image
            src={Orange}
            className="w-7 h-7 rounded-lg"
            alt="Orange Money"
          />
        </button>
        <button>
          <Image src={Wave} className="w-8 h-8 rounded-lg" alt="Wave Money" />
        </button>
      </div>
    );
  };
  return (
    <DashboardLayout>
      <div className=" overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-semibold">{t('serenitySpace')}</p>
          <div className="flex gap-2 items-center bg-white dark:bg-black p-1 px-4 rounded-lg">
            <p className="text-nowrap whitespace-nowrap">
              {t('doYouHaveConcerns')}
            </p>
            <Input
              placeholder="Ecrivez votre question"
              endContent={<BsFillSendFill className="text-gray-300" />}
            ></Input>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="w-3/12 space-y-3">
            <div className="w-full bg-card-cover bg-cover rounded-xl h-60 relative">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div>
                    <h1 className="text-gray-200 text-start font-semibold text-lg p-2">
                      {t('mainAccount')}
                    </h1>
                    <p className="text-gray-600 px-2">PA4839CI</p>
                  </div>
                  <div>
                    <Select
                      variant="flat"
                      className={"dark rounded-lg p-2 w-28 bg-black"}
                      size="sm"
                      defaultSelectedKeys={["FCFA"]}
                    >
                      {currencies.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="p-3">
                  <Image
                    className="w-8 h-8"
                    src={LockIconDark}
                    alt="Lock Icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-white p-3 absolute bottom-3">
                <div>
                  <p className="text-[10px] text-gray-400">{t('balance')}</p>
                  <p>{userData.balance} FCFA</p>
                </div>
                <div>
                <p className="text-[10px] text-gray-400">{t('availableBalance')}</p>
                  <p>{userData.balance_available} FCFA</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full bg-white dark:bg-black bg-cover rounded-xl h-3/4 p-2">
              <div>
                <h1 className="text-gray-700 text-start font-semibold text-xl p-2">
                   {t('quickActions')}
                </h1>
              </div>

              <Tabs aria-label="Options">
                <Tab
                  key="send"
                  title={t('sendMoney')}
                  className="w-full text-[11px]"
                >
                  <div className="w-full space-y-2">
                    <BeneficiarySelector data={beneficiaries} />
                    <Input label="Nom du bénéficiaire" />
                    <div className="flex gap-2 p-2 border-1 items-center border-black rounded-lg border-opacity-10">
                      <p className="text-gray-700 font-semibold whitespace-nowrap">
                        {t('sendingMode')}
                      </p>
                      <Tabs key={"sm"} size={"sm"} aria-label="Tabs sizes">
                        {sendingModes.map((mode) => (
                          <Tab key={mode} title={mode} />
                        ))}
                      </Tabs>
                    </div>
                    <Input label={t('accountNumber')} endContent={<Paiments />} />
                    <Input
                      label={t('amount')}
                      endContent={
                        <Button className="bg-black text-white rounded-lg p-2">
                          <BsFillSendFill className="text-white" />
                        </Button>
                      }
                    />
                  </div>
                </Tab>
                <Tab
                  key="paiment"
                  title="Lien de paiment"
                  className="w-full text-[11px]"
                >
                  <div className="w-full space-y-2">
                    <BeneficiarySelector data={beneficiaries} />
                    <Input label="Nom du bénéficiaire" />
                    <div className="flex gap-2 p-2 border-1 items-center border-black rounded-lg border-opacity-10">
                      <p className="text-gray-700 font-semibold whitespace-nowrap">
                        {t('sendingMode')}
                      </p>
                      <Tabs key={"sm"} size={"sm"} aria-label="Tabs sizes">
                        {sendingModes.map((mode) => (
                          <Tab key={mode} title={mode} />
                        ))}
                      </Tabs>
                    </div>
                    <Input label={t('accountNumber')} endContent={<Paiments />} />
                    <Input
                      label={t('amount')}
                      endContent={
                        <Button className="bg-black text-white rounded-lg p-2">
                          <BsFillSendFill className="text-white" />
                        </Button>
                      }
                    />
                  </div>
                </Tab>
                <Tab
                  key="Rechargement"
                  title="Rechargement"
                  className="w-full text-[11px]"
                >
                  <div className="w-full space-y-2">
                    <BeneficiarySelector data={beneficiaries} />
                    <Input label="Nom du bénéficiaire" />
                    <div className="flex gap-2 p-2 border-1 items-center border-black rounded-lg border-opacity-10">
                      <p className="text-gray-700 font-semibold whitespace-nowrap">
                        {t('sendingMode')}
                      </p>
                      <Tabs key={"sm"} size={"sm"} aria-label="Tabs sizes">
                        {sendingModes.map((mode) => (
                          <Tab key={mode} title={mode} />
                        ))}
                      </Tabs>
                    </div>
                    <Input label={t('accountNumber')} endContent={<Paiments />} />
                    <Input
                      label={t('amount')}
                      endContent={
                        <Button className="bg-black text-white rounded-lg p-2">
                          <BsFillSendFill className="text-white" />
                        </Button>
                      }
                    />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="w-7/12">
            <div className="flex flex-row space-x-2">
              {accounts.map((account) => (
                <AccountCard
                  key={account.title}
                  title={account.title}
                  balance={account.balance}
                />
              ))}
              <button className="border-2 border-dashed border-gray-400 rounded-xl p-4 flex items-center justify-center w-52">
                <span className="text-gray-700">{t('addAccount')}</span>
              </button>
            </div>
            <div className="mt-4 bg-white dark:bg-black rounded-xl p-3">
              <div className="flex justify-between items-center ">
                <p className="text-gray-700 text-lg font-semibold">
                  {t('recentTransactions')}
                </p>
                <Button
                  variant="light"
                  endContent={<IoIosArrowForward className="text-gray-500" />}
                >
                  {t('seeAll')}
                </Button>
              </div>
              <TransactionTable />
            </div>
          </div>
          <div className="w-3/12 space-y-4">
            <div className="p-4 mx-auto rounded-lg bg-white dark:bg-black">
              <div className="flex justify-between items-center">
                <p className="text-gray-700 text-lg font-semibold">
                  {t('salesPoints')}
                </p>
                <Button
                  variant="light"
                  endContent={<IoIosArrowForward className="text-gray-500" />}
                >
                  {t('seeAll')}
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
                  {t('pendingApprovals')}
                </p>
                <Button
                  variant="light"
                  endContent={<IoIosArrowForward className="text-gray-500" />}
                >
                  {t('seeAll')}
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
