"use client";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button, Input } from "@nextui-org/react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "@/navigation";
import AppLogo from "@/components/AppLogo";
import InputText from "@/components/InputText";
import LockIcon from "@/components/Icon/LockIcon";
import { clsx } from "clsx";
import Link from "next/link";
import { userData } from "@/data/user";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  const t = useTranslations("LoginPage");
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("emailError"))
      .required(t("loginInputErrorMessage")),
    password: yup.string().required(t("passwordInputErrorMessage")),
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    setFormError(false);
    setTimeout(() => {
      if (data.email == userData.email && data.password == userData.password) {
        router.push("/dashboard");
        reset();
      } else {
        setFormError(true);
      }
    }, 2000);

    console.log(data);
  };
  console.log(errors);

  return (
    <main className={`main-container relative`}>
      <header className="flex absolute left-8 top-8">
        <div>
          <AppLogo />
        </div>
      </header>
      <section className="form-section px-4">
        <div className="space-y-16 w-full">
          <p className="md:text-3xl font-semibold text-2xl text-center">
            {t("title")}
          </p>
          <div
            className={`w-full space-y-6 form-check-valid border-1 py-4 px-16 rounded-3xl`}
          >
            <div className="flex flex-col justify-center items-center">
              <div>
                <LockIcon
                  className={clsx(
                    "w-5 h-5",
                    formError && "animate-rotate-reverse-4s"
                  )}
                />
              </div>

              {(formError || errors.email || errors.password) && (
                <div className="my-2">
                  {formError && (
                    <p className={`text-danger text-xs`}>{t("formError")}</p>
                  )}
                  {errors.email && (
                    <p className={`text-danger text-xs`}>
                      {errors.email.message}
                    </p>
                  )}
                  {errors.password && (
                    <p className={`text-danger text-xs`}>
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <InputText
                        isInvalid={errors.email !== undefined}
                        placeholder={t("loginInputPlaceholder")}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <InputText
                        {...field}
                        placeholder={t("passwordInputPlaceholder")}
                        isInvalid={errors.password !== undefined}
                        isPassword
                      />
                    )}
                  />
                </div>
                <div>
                  <Link
                    href="/"
                    className="text-sm cursor-pointer hover:font-medium transition-all duration-100"
                  >
                    {t("forgotPassword")}
                  </Link>
                </div>
                <div>
                  <Button type="submit" className="submit-button">
                    {t("unlock")}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="my-7">
          <Link
            href="/"
            className="text-sm cursor-pointer font-medium hover:font-semibold transition-all duration-100"
          >
            {t("openAccount")}
          </Link>
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
