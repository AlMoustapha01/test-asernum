"use client";
import { currencies, currentCurrency, userData } from "@/data/user";
import { Select, SelectItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import LockIconDark from "@/assets/images/padlock.png";
import Image from "next/image";

export default function CreditCard() {
  const t = useTranslations("Dashboard");
  return (
    <div className="w-full bg-card-cover bg-cover rounded-xl h-60 relative">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>
            <h1 className="text-gray-200 text-start font-semibold text-lg p-2">
              {t("mainAccount")}
            </h1>
            <p className="text-gray-600 px-2">{userData.accountNumber}</p>
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
          <Image className="w-8 h-8" src={LockIconDark} alt="Lock Icon" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-white p-3 absolute bottom-3">
        <div>
          <p className="text-[10px] text-gray-400">{t("balance")}</p>
          <p>{userData.balance}{' '}{currentCurrency}</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-400">{t("availableBalance")}</p>
          <p>{userData.balance_available}{' '}{currentCurrency}</p>
        </div>
      </div>
    </div>
  );
}
