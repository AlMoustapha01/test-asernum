import { useTranslations } from "next-intl";
import LockIcon from "../Icons/LockIcon";
import { useState } from "react";

function replaceDigits(input: string): string {
  return input.replace(/[0-9A-Za-z ]/g, '*');
}

export default function BalanceDisplay({ data,label }: Readonly<{ data: string,label:string }>) {
  const t = useTranslations("Dashboard");

  const balance = data.toString() + " F CFA"
  const [lock, setLock] = useState(false);
  return (
    <div className="flex flex-shrink-0 gap-2 items-center">
      <p className="flex gap-1 items-center">
        {t.rich(label, {
          strong: (chunks) => <strong>{lock ? replaceDigits(balance) :balance}</strong>,
          p: (chunks) => <p className="font-light text-gray-400">{chunks}</p>,
        })}
        
      </p>
      <button onClick={()=> setLock(!lock)} className="bg-transparent">
        <LockIcon className={lock ?"fill-black h-3 w-3" : "fill-gray-500 h-3 w-3"} />
      </button>
    </div>
  );
}
