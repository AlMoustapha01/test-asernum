"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTranslations } from "next-intl";
import LogoWhite from "@/assets/images/PAYNAH-PRO LETTERMARK-BLACK.png";
import LogoDark from "@/assets/images/W-PAYNAH-PRO-LETTERMARK.png";
import LockIconLight from "@/assets/svg/lock-light.svg";
import LockIconDark from "@/assets/images/padlock.png";
import LockIconError from "@/assets/images/padlock-2.png";

import Image from "next/image";
import { useTheme } from "next-themes";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button, Input } from "@nextui-org/react";
import PasswordInput from "@/components/PasswordInput";
import * as yup from "yup";
import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "@/navigation";

type Props = {
  params: { locale: string };
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function IndexPage({ params: { locale } }: Props) {
  const t = useTranslations("LoginPage");
  const [formError, setFormError] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    if (formError) {
      router.push("/dashboard");
    }
    setFormError(!formError);

    console.log(data);
  };

  return (
    <main className={`main-container ${theme === "dark" && "dark"}`}>
      <header className="flex justify-between p-5 w-[80%] mx-auto">
        <div>
          <Image
            className="w-28"
            src={theme == "light" ? LogoWhite : LogoDark}
            alt="Logo Paynah"
          />
        </div>
        <div className="flex gap-4">
          <p className="font-semibold capitalize">{locale}</p>
          <ThemeSwitcher />
        </div>
      </header>
      <section className="form-section px-4">
        <p className="text-4xl text-center">
          {t.rich("title", {
            strong: (chunks) => (
              <strong className="font-semibold">{chunks}</strong>
            ),
          })}
        </p>
        <div
          className={`w-full space-y-6 ${
            formError ? "form-check-error" : "form-check-valid"
          }  border-1 p-8 px-16 rounded-3xl`}
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image
              src={
                formError
                  ? LockIconError
                  : theme == "dark"
                  ? LockIconDark
                  : LockIconLight
              }
              className="w-8 h-8"
              alt="lock icon"
            />

            <p
              className={`text-red-500 ${
                formError ? " opacity-100" : "opacity-0"
              }`}
            >
              {t("formError")}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder={t("loginInputPlaceholder")}
                      size="lg"
                      type="email"
                      variant="bordered"
                      classNames={{
                        input: "bg-gray-100 dark:bg-gray-950 py-7",
                        inputWrapper: "bg-gray-100 dark:bg-gray-950 py-7",
                      }}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      {...field}
                      placeholder={t("passwordInputPlaceholder")}
                      variant="bordered"
                      size="lg"
                      classNames={{
                        input: "bg-gray-100 dark:bg-gray-950 py-7",
                        inputWrapper: "bg-gray-100 dark:bg-gray-950 py-7",
                      }}
                    />
                  )}
                />
              </div>
              <div>
                <p>{t("forgotPassword")}</p>
              </div>
              <div>
                <Button
                  isDisabled={!isValid}
                  type="submit"
                  className="submit-button"
                >
                  {t("unlock")}
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Button variant="light" className="font-semibold">
            {t("openAccount")}
          </Button>
        </div>
      </section>
      <footer className="flex md:flex-row flex-col md:justify-between justify-center items-center p-5 w-[80%] mx-auto">
        <div>
          <LocaleSwitcher />
        </div>
        <div>
          <p className="text-[10px]">{t("copyright")}</p>
        </div>
      </footer>
    </main>
  );
}
