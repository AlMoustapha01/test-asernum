import React, { useTransition } from "react";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";

export default function LocaleSwitcherMobile() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const changeLocale = () => {
    if (locale == "fr") {
      startTransition(() => {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          { pathname, params },
          { locale: "en" }
        );
      });
    } else {
      startTransition(() => {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          { pathname, params },
          { locale: "fr" }
        );
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        disabled={isPending}
        onClick={changeLocale}
        className="w-9 h-9 capitalize disabled:bg-opacity-60 flex items-center justify-center rounded-full bg-default-100 hover:bg-default-50 duration-200 transition-all"
      >
        {locale}
      </button>
    </div>
  );
}
