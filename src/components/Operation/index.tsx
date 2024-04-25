"use client";
import BeneficiarySelector, { Beneficiary } from "../BeneficiarySelector";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Moov from "@/assets/images/MOOV MONEY.png";
import Mtn from "@/assets/images/MTN MOMO.png";
import Orange from "@/assets/images/ORANGE-MONEY.png";
import Wave from "@/assets/images/WAVE.png";
import Icon from "../Icon";
import DashboardAppLogo from "../Icons/DashboardAppLogo";
import CountrySelector from "../CountrySelector";
import MobileMoneySelector from "../MobileMoneySelector";
import { useState } from "react";
import InputTextLabelFloat from "../InputLabelFloat";

export default function Operation() {
  const t = useTranslations("Dashboard");
  const beneficiaries: Beneficiary[] = [
    { initials: "AD", color: "bg-red-200" },
    { initials: "DB", color: "bg-green-200" },
    { initials: "DZ", color: "bg-blue-200" },
    { initials: "BM", color: "bg-yellow-200" },
  ];
  const zone = [
    {
      label: "UEMOA",
      value: "UEMOA",
    },
  ];
  const [indicator, setIndicator] = useState("+225");
  const sendingModes = [
    {
      key: "direct",
      title: (
        <div className="flex items-center space-x-1">
          <DashboardAppLogo className="w-3 h-3" />
          <span>Direct</span>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-2">
          <InputTextLabelFloat label={t("accountNumber")} />
          <div className="relative">
            <InputTextLabelFloat label={t("amount")} />
            <div className="absolute right-0 top-0 h-full">
              <Button className="bg-black text-white rounded-lg h-full">
                <Icon name="send" className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "mobile_money",
      title: (
        <div className="flex items-center space-x-2">
          <span>Mobile money</span>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-2">
          <div className="relative">
            <label
              className="absolute left-4 top-[-9px] z-40 bg-white"
              htmlFor="country"
            >
              Pays opérateur
            </label>
            <CountrySelector
              variant="bordered"
              classNames={{
                trigger:
                  "py-6 bg-white border border-gray-light hover:bg-white",
              }}
              id="country"
              onSelectionChange={(keys) =>
                setIndicator(Array.from(keys)[0].toString())
              }
            />
          </div>

          <MobileMoneySelector
            classNames={{
              trigger: "py-6 bg-white border border-gray-light hover:bg-white",
            }}
            indicator={indicator}
          />
          <div className="flex flex-col gap-2">
            <InputTextLabelFloat label={"Nom du bénéficiaire"} />
            <div className="relative">
              <InputTextLabelFloat label={t("amount")} />
              <div className="absolute right-0 top-0 h-full">
                <Button className="bg-black text-white rounded-lg h-full">
                  <Icon name="send" className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "virement",
      title: (
        <div className="flex items-center space-x-2">
          <span>Virements</span>
        </div>
      ),
      children: (
        <div className="flex flex-col gap-3">
          <InputTextLabelFloat label={"Nom du bénéficiaire"} />
          <InputTextLabelFloat label={"RIB"} />
          <div className="relative">
            <label
              className="absolute left-4 top-[-9px] z-40 bg-white"
              htmlFor="zone"
            >
              Compte à créditer
            </label>
            <Select
              variant="bordered"
              id="zone"
              selectedKeys={["UEMOA"]}
              className="border-black"
              classNames={{
                trigger:
                  "py-6 bg-white border border-gray-light hover:bg-white",
              }}
            >
              {zone.map((cur) => (
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
      ),
    },
  ];

  return (
    <div className="w-full space-y-2">
      <BeneficiarySelector data={beneficiaries} />
      <div className="relative">
        <p className="absolute left-1 top-4 text-[10.5px] text-[#84818a] 2xl:text-[11px] font-normal whitespace-nowrap">
          {t("sendingMode")}
        </p>
        <div className="grid content-end">
          <Tabs
            key={"sm"}
            size={"sm"}
            aria-label="Tabs sizes"
            className="text-xs"
            classNames={{
              base: "flex justify-end border border-black rounded-lg p-1 border-opacity-10",
              tab: "px-1 py-1",
            }}
          >
            {sendingModes.map((mode) => (
              <Tab
                key={mode.key}
                title={mode.title}
                className="xl:text-xs w-full"
              >
                <div className="w-full">{mode.children}</div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
