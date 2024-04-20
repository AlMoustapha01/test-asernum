import { Inter } from "next/font/google";
import AppProvider from "./provider";
import { locales } from "@/config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: {locale: string};
};

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description')
  };
}


export default function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
