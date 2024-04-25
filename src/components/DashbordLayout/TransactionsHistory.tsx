import { Button, Select, SelectItem } from "@nextui-org/react";
import AccountCard from "../AccountCard";
import TransactionTable from "@/components/Datatable";
import Icon from "../Icon";
import { useTranslations } from "next-intl";

const accounts = [
  { title: "Salaire Corporate", balance: 2873456 },
  { title: "Salaire pompiste", balance: 1873456 },
  { title: "Factures", balance: 6873456 },
];

export default function TransactionsHistory() {
  const t = useTranslations("Dashboard");

  const debits = [
    {
      label: t("principalAccount"),
      value: t("principalAccount"),
    },
    {
      label: t("salarial"),
      value: t("salarial"),
    },
  ];
  return (
    <>
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
            endContent={<Icon name="chevron-right" className="text-gray-500" />}
          >
            {t("seeAll")}
          </Button>
        </div>
        <TransactionTable />
      </div>
    </>
  );
}
