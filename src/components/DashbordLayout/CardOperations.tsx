import { Button, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import CreditCard from "../CreditCard";
import Operation from "../Operation";
import InputTextLabelFloat from "../InputLabelFloat";
import Icon from "../Icon";
import { useTranslations } from "next-intl";


export default function CardOperations() {
  const t = useTranslations("Dashboard");

  const debits = [
    {
      label: t('principalAccount'),
      value: t('principalAccount'),
    },
    {
      label: t('salarial'),
      value: t('salarial'),
    },
  ];
  return (
    <>
      <CreditCard />
      <div className="flex flex-col w-full xl:h-[30rem] bg-white dark:bg-black bg-cover rounded-xl p-2">
        <div>
          <h1 className="font-medium text-base">{t("quickActions")}</h1>
        </div>

        <Tabs aria-label="Options">
          <Tab key="send" title={t("sendMoney")} className="w-full text-[11px]">
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
                  {t('creditAccount')}
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
              <p className="text-xs text-[#7d7d7d] mt-1"> {t('availableSoon')}</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
