"use client"
import DashboardLayout from "@/components/DashbordLayout";
import { Button, Input } from "@nextui-org/react";

import SellPointEmpty from "@/assets/ASSET DASHBOARD/Groupe 298.svg";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

import CardOperations from "@/components/DashbordLayout/CardOperations";
import TransactionsHistory from "@/components/DashbordLayout/TransactionsHistory";
import { useTranslations } from "next-intl";
import Transaction from "@/components/Transaction";



export default function DashbordPage() {
  const t = useTranslations("Dashboard");

  return (
    <DashboardLayout>
      <div className="pb-10">
        {/** part one */}
        <div className="xl:flex md:grid md:grid-cols-2 justify-between items-center">
          <p className="text-lg text-[#767676] tracking-tight">
            {t("serenitySpace")}
          </p>
          <div className="flex gap-2 items-center bg-white dark:bg-black p-1 px-4 rounded-lg">
            <p className="text-nowrap whitespace-nowrap text-xs">
              {t("doYouHaveConcerns")}
            </p>
            <Input
              placeholder="Ecrivez votre question"
              endContent={<BsFillSendFill className="text-gray-300" />}
            ></Input>
          </div>
        </div>

        <div className="flex flex-grow gap-3 mt-2.5">
          <div className="w-[25%] space-y-3 h-full">
            <CardOperations />
          </div>
          <div className="w-[50%] h-full">
            <TransactionsHistory />
          </div>
          <div className="w-[25%] space-y-6 h-full">
            <div className="flex flex-col space-y-2 p-4 m-auto rounded-xl bg-white xl:h-[22rem]">
              <div>
                <div className="flex justify-between items-center h-full">
                  <p className="font-medium text-sm 2xl:text-base">
                    {t("salesPoints")}
                  </p>
                  <Button
                    variant="light"
                    className="inline-flex text-xs text-[#909090] hover:underline duration-200 mb-1"
                    endContent={<IoIosArrowForward className="text-gray-500" />}
                  >
                    {t("seeAll")}
                  </Button>
                </div>
                <div className="border-t-2 border-dashed border-gray-light" />
              </div>

              <div className="h-full flex justify-center items-center">
                <div className="inline-flex flex-col justify-center">
                  <Image
                    src={SellPointEmpty}
                    className="h-[4rem] w-auto"
                    alt="Sell Point Empty"
                  />
                  <p className="text-xs text-[#7d7d7d] mt-1">
                    Aucun point de vente retrouvé
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2 p-4 m-auto rounded-xl bg-white xl:h-[22rem]">
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-sm 2xl:text-base">
                    {t("pendingApprovals")}
                  </p>
                  <Button
                    variant="light"
                    className="inline-flex text-xs text-[#909090] hover:underline duration-200 mb-1"
                    endContent={<IoIosArrowForward className="text-gray-500" />}
                  >
                    {t("seeAll")}
                  </Button>
                </div>
                <div className="border-t-2 border-dashed border-gray-light" />
              </div>

              <div className="h-full flex justify-center items-center">
                <div className="inline-flex flex-col justify-center">
                  <Transaction
                    amount={10000}
                    currency="F CFA"
                    phoneNumber="+225 07 77 40 41 36"
                    initiator="Ben Ismaël"
                    status={true}
                  />
                  <Transaction
                    amount={5000}
                    currency="F CFA"
                    phoneNumber="+225 07 77 40 41 36"
                    initiator="Ben Ismaël"
                    status={false}
                  />
                  <Transaction
                    amount={105000}
                    currency="F CFA"
                    phoneNumber="NPA32453SA"
                    initiator="Jolivet Kouadio"
                    status={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
