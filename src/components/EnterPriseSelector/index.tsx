import React from "react";
import { Select, SelectItem, Avatar, SelectProps } from "@nextui-org/react";

interface EnterpriseSelectorProps {
  data: {
    name: string;
    icon: string;
    code: string;
  }[];
}
export default function EnterpriseSelector({
  data,
}: EnterpriseSelectorProps) {
  return (
    <Select
      items={data}
      className="w-[200px]"
      variant="bordered"
      defaultSelectedKeys={[data[0].code]}
      classNames={{
        label: "group-data-[filled=true]:-translate-y-5",
        trigger: "min-h-16",
        listboxWrapper: "max-h-[400px]",
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        },
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data?.name}
              className="flex-shrink-0 rounded-md bg-white p-2 border-1 border-black border-opacaity-10"
              size="sm"
              src={item.data?.icon}
            />
            <div className="flex flex-col">
              <span>{item.data?.name}</span>
              <span className="text-default-500 text-tiny">
                ({item.data?.code})
              </span>
            </div>
          </div>
        ));
      }}
    >
      {(data) => (
        <SelectItem key={data.code} textValue={data.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={data.name}
              className="flex-shrink-0"
              size="sm"
              src={data.icon}
            />
            <div className="flex flex-col">
              <span className="text-small">{data.name}</span>
              <span className="text-tiny text-default-400">{data.code}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
