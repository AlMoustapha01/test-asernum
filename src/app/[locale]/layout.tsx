import { Montserrat } from "next/font/google";
import AppProvider from "./provider";
import { locales } from "@/config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const montserrat = Montserrat({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider attribute="class" defaultTheme="light">
            {children}
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
