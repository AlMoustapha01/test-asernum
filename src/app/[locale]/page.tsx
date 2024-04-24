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
import LockIcon from "@/components/Icons/LockIcon";
import { clsx } from "clsx";
import Link from "next/link";
import { userData } from "@/data/user";
import Loader from "@/components/Loader";
import { ScaleLoader } from "react-spinners";
import LocaleSwitcherMobile from "@/components/LocaleSwitcherMobile";

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
        setLoading(false);
        reset();
      } else {
        setFormError(true);
        setLoading(false);
      }
    }, 2000);

    console.log(data);
  };
  console.log(errors);

  return (
    <div className={`main-container`}>
      <header className="md:block hidden">
        <div className="max-w-screen-2xl mx-auto py-5 px-4 md:px-6 lg:px-8">
          <Link className="block relative h-[3.5rem] w-[8rem]" href={"/"}>
            <AppLogo className="absolute object-contain w-full h-full top-0 bottom-0 right-0 left-0" />
          </Link>
        </div>
      </header>

      <header className="md:hidden block">
        <div className="max-w-screen-2xl border-b border-[#efefef] bg-[#fbfbfb] mx-auto pt-4 pb-3 px-4 md:px-6 lg:px-8">
          <div className="flex space-x-2 justify-between">
            <div className="inline-flex space-x-2">
              <Link className="block relative h-[2.2rem] w-[6rem]" href={"/"}>
                <AppLogo className="absolute object-contain w-full h-full top-0 bottom-0 right-0 left-0" />
              </Link>
            </div>
            <div>
              <LocaleSwitcherMobile />
            </div>
          </div>
        </div>
      </header>

      <main className="form-section px-4 mt-6">
        <div className="space-y-[60px] w-full">
          <p className="md:text-3xl font-semibold text-2xl text-center">
            {t("title")}
          </p>
          <div
            className={`w-full space-y-6 form-check-valid border-1 py-6 md:px-16 px-4 rounded-3xl`}
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
                <div className="relative">
                  <Button
                    isDisabled={loading}
                    type="submit"
                    className="submit-button"
                  >
                    {t("unlock")}
                  </Button>
                  {loading && (
                    <div className="absolute inset-0 m-auto w-full h-full bg-[#4b4b4b] bg-opacity-100 flex pl-[42%] items-center rounded-3xl">
                      <ScaleLoader width={3} height={15} color="white" />
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="my-[28px]">
          <Link
            href="/"
            className="text-sm cursor-pointer font-medium hover:font-semibold transition-all duration-100"
          >
            {t("openAccount")}
          </Link>
        </div>
      </main>
      {/*** Web footer ****/}
      <footer className="hidden md:block">
        <div className="max-w-screen-2xl mx-auto py-5 px-4 mt-[2.401rem] md:px-6 lg:px-8">
          <div className="flex space-x-3 items-center justify-between">
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
          </div>
        </div>
      </footer>
      {/***** Mobile footer *****/}
      <footer className="block md:hidden">
        <div className="max-w-screen-2xl border-t border-[#efefef] bg-[#fbfbfb] py-4 px-4 md:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="font-light text-xs space-y-1 flex flex-col items-center justify-center w-full">
              <Link
                href={"/"}
                className="hover:underline underline-offset-1 text-center duration-30"
              >
                {t("confidentiality")}
              </Link>
              <p className="text-center"> {t("copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
