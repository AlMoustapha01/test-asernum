"use client";
import { currencies, currentCurrency, userData } from "@/data/user";
import { Select, SelectItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import LockIcon from "../Icons/LockIcon";
import { useState } from "react";
import Icon from "../Icon";

function replaceDigits(input: string): string {
  return input.replace(/[0-9A-Za-z ]/g, "*");
}

export default function CreditCard() {
  const t = useTranslations("Dashboard");
  const [lock, setLock] = useState(false);

  return (
    <div className="w-full bg-card-cover bg-cover rounded-3xl py-3 px-2 h-60 relative">
      <div className="flex justify-between  px-2">
        <div className="flex items-center gap-1">
          <div>
            <h1 className="text-[#dbdbdb] text-sm mr-2 whitespace-nowrap uppercase">
              {t("mainAccount")}
            </h1>
            <p className="text-xs text-[#afafaf] font-light">
              {userData.accountNumber}
            </p>
          </div>
          <div className="flex justify-center items-center h-full mt-3">
            <Select
              variant="flat"
              className={"dark text-xs rounded-lg p-2 w-[6.2rem] h-7"}
              size="sm"
              defaultSelectedKeys={["FCFA"]}
              selectorIcon={
                <Icon name="chevron-down" className="text-white fill-whites" />
              }
            >
              {currencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <button onClick={() => setLock(!lock)} className="bg-transparent">
          <LockIcon className={"fill-white h-3 w-3"} />
        </button>
      </div>
      <div className="flex flex-col gap-2 text-white p-3 absolute bottom-3">
        <div>
          <p className="text-[10px] text-gray-400">{t("balance")}</p>
          {lock ? (
            <p>{replaceDigits(userData.balance + " " + currentCurrency)}</p>
          ) : (
            <p>
              {userData.balance} {currentCurrency}
            </p>
          )}
        </div>
        <div>
          <p className="text-[10px] text-gray-400">{t("availableBalance")}</p>
          {lock ? (
            <p>
              {replaceDigits(
                userData.balance_available + " " + currentCurrency
              )}
            </p>
          ) : (
            <p>
              {userData.balance_available} {currentCurrency}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
