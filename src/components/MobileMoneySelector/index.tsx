import React from "react";
import {
  Select,
  SelectItem,
  Avatar,
  SelectedItems,
  SelectProps,
  Input,
} from "@nextui-org/react";
import Moov from "@/assets/images/MOOV MONEY.png";
import Mtn from "@/assets/images/MTN MOMO.png";
import Orange from "@/assets/images/ORANGE-MONEY.png";
import Wave from "@/assets/images/WAVE.png";
import Image, { StaticImageData } from "next/image";

const mobileMoney = [
  {
    name: "Orange",
    flag: Orange,
  },
  {
    name: "Moov",
    flag: Moov,
  },
  {
    name: "Mtn",
    flag: Mtn,
  },

  {
    name: "Wave",
    flag: Wave,
  },
];

interface MobileMoneySelectorProps extends Omit<SelectProps, "children"> {
  indicator: string;
}
export default function MobileMoneySelector({
  indicator,
  ...props
}: MobileMoneySelectorProps) {
  return (
    <div className="flex relative mt-2">
      <p className="absolute px-1 z-40 left-3 top-[-10px] bg-white font-light">
        Numéro de compte
      </p>
      <div className="w-[25%]">
        <Select
          {...props}
          size="lg"
          defaultSelectedKeys={[mobileMoney[0].name]}
          items={mobileMoney}
          classNames={{
            trigger: " rounded-r-none bg-white border",
            innerWrapper: " rounded-r-none",
            mainWrapper: " rounded-r-none",
            listboxWrapper: "w-[200px]",
            listbox: "w-[200px]",
            popoverContent: "w-[200px]",
          }}
          renderValue={(
            items: SelectedItems<{
              name: string;
              flag: StaticImageData;
            }>
          ) => {
            return items.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                {item.data && (
                  <Image
                    alt={item.data?.name}
                    className="flex-shrink-0 h-8 w-8"
                    src={item.data.flag}
                  />
                )}
              </div>
            ));
          }}
        >
          {(country) => (
            <SelectItem key={country.name} textValue={country.name}>
              <div className="flex gap-2 items-center">
                <Image
                  alt={country.name}
                  className="flex-shrink-0 h-6 w-6"
                  src={country.flag}
                />
                <div className="flex flex-col">
                  <span className="text-small">{country.name}</span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      </div>
      <div className="w-[75%]">
        <Input
          size="lg"
          className="rounded-l-none border-l-1 border rounded-2xl"
          classNames={{
            input: "rounded-l-none bg-white hover:bg-white",
            innerWrapper: "rounded-l-none",
            inputWrapper:
              "rounded-l-none bg-white group-data-[hover=true]:bg-white group-data-[focus=true]:bg-white hover:bg-white focus:bg-white",
          }}
          startContent={<p className="text-xs font-medium">{indicator}</p>}
        />
      </div>
    </div>
  );
}
