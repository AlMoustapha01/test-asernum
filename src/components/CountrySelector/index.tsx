import React from "react";
import {
  Select,
  SelectItem,
  Avatar,
  SelectedItems,
  SelectProps,
} from "@nextui-org/react";
import CI from "@/assets/images/ivory-coast.png";
import BN from "@/assets/images/benin.png";
import SN from "@/assets/images/senegal.png";
import CM from "@/assets/images/cameroon.png";
import GN from "@/assets/images/guinea.png";
import Image, { StaticImageData } from "next/image";

const countries = [
  {
    name: "Côte d'Ivoire",
    flag: CI,
    code:"+225"
  },
  {
    name: "Bénin",
    flag: BN,
    code:"+229"
  },
  {
    name: "Sénégal",
    flag: SN,
    code:"+221"
  },
  {
    name: "Cameroun",
    flag: CM,
    code:"+237"
  },
  {
    name: "Guinée",
    flag: GN,
    code:"+224"
  },
];

interface CountrySelectorProps extends Omit<SelectProps, "children"> {}
export default function CountrySelector({ ...props }: CountrySelectorProps) {
  return (
    <Select
      {...props}
      defaultSelectedKeys={[countries[0].code]}
      items={countries}
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
                className="flex-shrink-0 h-6 w-6"
                src={item.data.flag}
              />
            )}
            <div className="flex flex-col">
              <span>{item.data?.name}</span>
            </div>
          </div>
        ));
      }}
    >
      {(country) => (
        <SelectItem  key={country.code} textValue={country.name}>
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
  );
}
