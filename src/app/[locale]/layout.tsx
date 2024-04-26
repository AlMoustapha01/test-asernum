import { Poppins } from "next/font/google";
import AppProvider from "./provider";
import { locales } from "@/config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Analytics } from "@vercel/analytics/react"

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});

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
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>
            {children}
            <Analytics />
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
