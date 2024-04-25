import React from "react";
import Icon from "../Icon";
import { Button } from "@nextui-org/react";

interface TransactionProps {
  amount: number;
  currency: string;
  phoneNumber: string;
  initiator: string;
  status: boolean;
}

const Transaction: React.FC<TransactionProps> = ({
  amount,
  currency,
  phoneNumber,
  initiator,
  status,
}) => {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-white border-b rounded-lg mb-3">
      <div>
        <p className="text-sm font-semibold text-gray-800">
          Transfert de {amount.toLocaleString()} {currency} vers {phoneNumber}
        </p>
        <p className="text-xs text-gray-500">Initié par {initiator}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Button color="success" variant="light"  radius="full" isIconOnly>
          <Icon name="check" className="w-5 h-5 text-green-500" />
        </Button>
        <Button color="danger" variant="light" radius="full" isIconOnly>
          <Icon name="x" className="w-5 h-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export default Transaction;
