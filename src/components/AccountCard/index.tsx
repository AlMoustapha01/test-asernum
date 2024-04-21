import Wallet from "@/assets/ASSET DASHBOARD/Groupe 236.svg";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";

type AccountProps = {
  title: string;
  balance: number;
};

// Individual account card component
const AccountCard: React.FC<AccountProps> = ({ title, balance }) => {

  const t = useTranslations("Dashboard");
  return (
    <div className="bg-white dark:bg-black rounded-2xl space-y-3 p-4 2xl:w-52 xl:w-44 w-full">
      <div className="flex w-full gap-2">
        <div className="w-full">
          <Button className="p-2" isIconOnly>
            <Image src={Wallet} alt="Wallet" width={36} height={36} />
          </Button>
          <h2 className="text-gray-700 font-semibold text-sm whitespace-nowrap">
            {title}
          </h2>
        </div>
        <Button variant="light" className="p-2" isIconOnly>
          <HiOutlineDotsVertical />
        </Button>
      </div>

      <div>
        <p className="text-gray-600 text-[10px]">{t("availableBalance")}</p>
        <p className="text-gray-900 dark:text-gray-300 font-bold whitespace-nowrap">
          {balance.toLocaleString()} XOF
        </p>
      </div>
    </div>
  );
};

export default AccountCard;
