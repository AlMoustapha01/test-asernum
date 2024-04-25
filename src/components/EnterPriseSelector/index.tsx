import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Icon from "../Icon";

interface EnterpriseSelectorProps {
  data: {
    name: string;
    icon: StaticImageData;
    code: string;
  };
}
export default function EnterpriseSelector({
  data,
}: Readonly<EnterpriseSelectorProps>) {
  const code = [
    {
      label: "4567589988",
      value: "4567589988",
    },
  ];
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <div className="flex items-center gap-2 bg-[#fafafa] rounded-xl border border-[#dadadb] p-2">
          <div className="lex-shrink-0 rounded-xl bg-white p-2 border-1 border-black border-opacity-10 border-opacaity-10">
            <Image
              className="h-9 w-11"
              src={data.icon}
              alt="enterprise logo"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold">{data.name}</span>
            <span className="text-default-500 text-tiny">{data.code}</span>
          </div>
          <div>
            <Icon name="chevron-down" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[450px] bg-[#f3f4f7]">
        <div className="px-1 py-2 w-full bg-[#f3f4f7]">
          <div className="p-4 bg-white rounded-tr-2xl rounded-tl-2xl">
            <div className="w-full flex justify-between items-center">
              <Select variant={'faded'} selectedKeys={["4567589988"]} className="w-56 border-black">
                {code.map((cur) => (
                  <SelectItem key={cur.value} value={cur.value}>
                    {cur.label}
                  </SelectItem>
                ))}
              </Select>
              <button>
              <Icon name="x" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
          <Image
              className="h-36 w-36"
              src={data.icon}
              alt="enterprise logo"
            />
            <p>{code[0].label}</p>
            <button className="flex items-center gap-2 rounded-3xl p-2 px-5 border bg-transparent border-black hover:bg-black duration-200 hover:text-white transition-all">
              <Icon name="download" />
              <p>Télécharger le Paynah ID</p>
            </button>
          </div>
          <div className="account-infos mt-8">
            <div className="px-6 pt-5 pb-6 bg-white rounded-3xl">
              <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <div className="inline-flex flex-col">
                    <span className="font-light text-xs text-[#626262] mb-[.1rem]">Nom du compte</span>
                    <span className="uppercase text-xs font-semibold">Compte Principal</span>
                  </div>
                </div>
              <div>
              <div className="inline-flex flex-col">
                <span className="font-light text-xs text-[#626262] mb-[.1rem]">Numéro du compte</span>
                <span className="uppercase text-xs font-semibold">4567589988</span>
              </div>
            </div>
            <div>
              <div className="inline-flex flex-col">
                <span className="font-light text-xs text-[#626262] mb-[.1rem]">Solde du compte</span>
                <span className="uppercase text-xs font-semibold">0&nbsp;F CFA</span>
              </div>
            </div>
            <div>
              <div className="inline-flex flex-col">
                <span className="font-light text-xs text-[#626262] mb-[.1rem]">Solde effectif disponible</span>
                <span className="uppercase text-xs font-semibold">0&nbsp;F CFA</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
