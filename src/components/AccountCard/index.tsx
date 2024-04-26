import {
  Button,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Icon from "../Icon";
import WalletIcon from "../Icons/WalletIcon";

type AccountProps = {
  title: string;
  balance: number;
};

// Individual account card component
const AccountCard: React.FC<AccountProps> = ({ title, balance }) => {
  const t = useTranslations("Dashboard");
  return (
    <div className="snap-end shrink-0 w-[30%] 2xl:w-[24%] bg-white flex flex-col justify-between space-y-8 2xl:space-y-8 p-4 rounded-3xl">
      <div className="flex w-full justify-between">
        <div className="w-full">
          <Button className="p-2" isIconOnly>
            <WalletIcon width={36} height={36} />
          </Button>
          <h2 className="text-gray-700 font-semibold text-sm whitespace-nowrap">
            {title}
          </h2>
        </div>
        <Popover placement="bottom-end" offset={20} showArrow>
          <PopoverTrigger>
            <Button variant="light" className="p-2" isIconOnly>
              <Icon className="w-3 h-3" name="ellipsis-vertical" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Listbox className="text-xs" aria-label="Actions" onAction={(key) => alert(key)}>
              <ListboxItem
                className="text-xs"
                
                startContent={
                  <Icon className="w-4 h-4" name="clipboard-minus" />
                }
                key="show"
              >
                {t('accountDetails')}
              </ListboxItem>
              <ListboxItem
                className="text-xs"
                startContent={<Icon className="w-4 h-4" name="pencil" />}
                key="edit"
              >
               {t('modifyAccountName')}
              </ListboxItem>
              <ListboxItem
                className="text-xs"
                startContent={<Icon className="w-4 h-4" name="trash-2" />}
                key="delete"
              >
                {t('deleteAccount')}
              </ListboxItem>
            </Listbox>
          </PopoverContent>
        </Popover>
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
