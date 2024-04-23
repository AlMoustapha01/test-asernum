"use client";
import { useTranslations } from "next-intl";
import LockIconLight from "@/assets/svg/lock-light.svg";
import LockIconError from "@/assets/images/padlock-2.png";

import Image from "next/image";
import { useTheme } from "next-themes";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button, Input } from "@nextui-org/react";
import PasswordInput from "@/components/PasswordInput";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "@/navigation";
import AppLogo from "@/components/AppLogo";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  const t = useTranslations("LoginPage");
  const [formError, setFormError] = useState(false);
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Le champ Identifiant doit être un email")
      .required(t("loginInputErrorMessage")),
    password: yup.string().required(t("passwordInputErrorMessage")),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
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
    <main className={`main-container relative`}>
      <header className="flex absolute left-8 top-8">
        <div>
          <AppLogo />
        </div>
      </header>
      <section className="form-section px-4">
        <p className="md:text-3xl font-semibold text-2xl text-center mt-6 mb-12">
          {t("title")}
        </p>
        <div
          className={`w-full space-y-6 form-check-valid border-1 py-4 px-16 rounded-3xl`}
        >
          <div className="flex flex-col justify-center items-center">
            <Image
              src={formError ? LockIconError : LockIconLight}
              className="w-5 h-5"
              alt="lock icon"
            />
            {(formError  || errors.email || errors.password) && <div className="my-2">
              {formError && (
                <p className={`text-danger text-xs`}>{t("formError")}</p>
              )}
              {errors.email && (
                <p className={`text-danger text-xs`}>{errors.email.message}</p>
              )}
              {errors.password && (
                <p className={`text-danger text-xs`}>
                  {errors.password.message}
                </p>
              )}
            </div>}
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
                      isInvalid={errors.email !== undefined}
                      classNames={{
                        input: [
                          "bg-gray-light border-0 font-light text-sm px-2 py-[26px]",
                          "hover:bg-gray-light ",
                          "placeholder:text-[#626262]",
                          "file:bg-transparent",
                        ],
                        innerWrapper: "bg-transparent border-0 file:bg-transparent",
                        inputWrapper: [
                          "shadow-none border-0 bg-gray-light py-[26px]",
                          "hover:bg-gray-light",
                          "focus:bg-gray-light",
                          "file:bg-transparent",
                          "backdrop-blur-xl",
                          "backdrop-saturate-200",
                          "group-data-[focused=true]:bg-gray-light",
                          "!cursor-text",
                        ],
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
                      isInvalid={errors.password !== undefined}
                      classNames={{
                        input: [
                          "bg-gray-light border-0 font-light text-sm px-2 py-[26px]",
                          "hover:bg-gray-light ",
                          "placeholder:text-[#626262]",
                          "file:bg-transparent",
                        ],
                        innerWrapper: "bg-transparent border-0 file:bg-transparent",
                        inputWrapper: [
                          "shadow-none border-0 bg-gray-light py-[26px]",
                          "hover:bg-gray-light",
                          "focus:bg-gray-light",
                          "file:bg-transparent",
                          "backdrop-blur-xl",
                          "backdrop-saturate-200",
                          "group-data-[focused=true]:bg-gray-light",
                          "!cursor-text",
                        ],
                      }}
                    />
                  )}
                />
              </div>
              <div>
                <a
                  href="/"
                  className="text-sm cursor-pointer hover:font-medium transition-all duration-100"
                >
                  {t("forgotPassword")}
                </a>
              </div>
              <div>
                <Button type="submit" className="submit-button">
                  {t("unlock")}
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="my-7">
          <Button variant="light" className="font-semibold">
            {t("openAccount")}
          </Button>
        </div>
      </section>
      <footer className="footer">
        <div>
          <LocaleSwitcher />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[12px] md:text-start text-center">
            {t("copyright")}
          </p>
          <p className="text-[12px]">{"|"}</p>

          <p className="text-[12px] md:text-start text-center">
            {t("confidentiality")}
          </p>
        </div>
      </footer>
    </main>
  );
}
