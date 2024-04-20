import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("LoginPage");

  return (
    <main className="login-web-bg-light dark:login-web-bg-dark h-screen w-screen bg-cover">
      <ThemeSwitcher />
     <p>Text blanc</p>

    </main>
  );
}
