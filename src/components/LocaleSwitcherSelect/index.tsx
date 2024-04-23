"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { Select, SelectProps } from "@nextui-org/react";
import Globe from "@/assets/svg/globe.svg";
import Image from "next/image";
interface Props extends SelectProps {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Select
      placeholder=""
      startContent={<Image className="w-5" src={Globe} alt="globe" />}
      defaultSelectedKeys={[defaultValue]}
      disabled={isPending}
      onChange={onSelectChange}
      variant="bordered"
      size="sm"
      className="w-[114px] text-[12px]"
      scrollShadowProps={{
        isEnabled: false
      }}
      classNames={{
        trigger:['bg-transparent','border-none'],
        value:['text-[12px]']
      }}
    >
      {children}
    </Select>
  );
}
