"use client";
import { beneficiaries, sendingModes } from "@/data/user";
import BeneficiarySelector from "../BeneficiarySelector";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Moov from "@/assets/images/MOOV MONEY.png";
import Mtn from "@/assets/images/MTN MOMO.png";
import Orange from "@/assets/images/ORANGE-MONEY.png";
import Wave from "@/assets/images/WAVE.png";
import { BsFillSendFill } from "react-icons/bs";

const Paiments = () => {
  return (
    <div className="flex gap-1">
      <button>
        <Image src={Moov} className="w-8 h-8 rounded-lg" alt="Moov Money" />
      </button>
      <button>
        <Image src={Mtn} className="w-8 h-8 rounded-lg" alt="MTN MOMO" />
      </button>
      <button>
        <Image src={Orange} className="w-7 h-7 rounded-lg" alt="Orange Money" />
      </button>
      <button>
        <Image src={Wave} className="w-8 h-8 rounded-lg" alt="Wave Money" />
      </button>
    </div>
  );
};

export default function Operation() {
  const t = useTranslations();

  return (
    <div className="w-full space-y-2">
      <BeneficiarySelector data={beneficiaries} />
      <Input label="Nom du bénéficiaire" />
      <div className="flex gap-2 p-2 border-1 items-center border-black rounded-lg border-opacity-10">
        <p className="text-gray-700 font-semibold whitespace-nowrap">
          {t("sendingMode")}
        </p>
        <Tabs key={"sm"} size={"sm"} aria-label="Tabs sizes">
          {sendingModes.map((mode) => (
            <Tab key={mode} title={mode} />
          ))}
        </Tabs>
      </div>
      <Input label={t("accountNumber")} endContent={<Paiments />} />
      <Input
        label={t("amount")}
        endContent={
          <Button className="bg-black text-white rounded-lg p-2">
            <BsFillSendFill className="text-white" />
          </Button>
        }
      />
    </div>
  );
}
