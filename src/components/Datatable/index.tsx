import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Icon from "../Icon";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Effectué: "success",
  Échoué: "danger",
  "En cours": "warning",
  Completed: "success",
  Failed: "danger",
  "In Progress": "warning",
};

export default function DataTable() {
  const t = useTranslations("Dashboard");
  const columns = [
    { name: "ID Transaction", uid: "ID_transaction" },
    { name: t("date"), uid: "date" },
    { name: t("type"), uid: "type" },
    { name: t("amount"), uid: "montant" },
    { name: t("status"), uid: "statut" },
    { name: t("actions"), uid: "actions" },
  ];
  const transactions = [
    {
      ID_transaction: "24553FS3RT",
      date: "20-01-2024",
      type: t("sendMoney"),
      montant: "50 000 FCFA",
      statut: t("completed"),
    },
    {
      ID_transaction: "24553FS3AS",
      date: "20-01-2024",
      type: t("sendMoney"),
      montant: "50 000 FCFA",
      statut: t("completed"),
    },
    {
      ID_transaction: "24553F44AS",
      date: "20-01-2024",
      type: t("paymentLink"),
      montant: "50 000 FCFA",
      statut: t("inProgress"),
    },
    {
      ID_transaction: "245HHFS3AS",
      date: "20-01-2024",
      type: t("paymentLink"),
      montant: "50 000 FCFA",
      statut: t("completed"),
    },
    {
      ID_transaction: "245YUFS3AS",
      date: "20-01-2024",
      type: t("sendMoney"),
      montant: "50 000 FCFA",
      statut: t("completed"),
    },
    {
      ID_transaction: "78553FS3AS",
      date: "20-01-2024",
      type: t("sendMoney"),
      montant: "50 000 FCFA",
      statut: t("failed"),
    },
    {
      ID_transaction: "24878FS3AS",
      date: "20-01-2024",
      type: t("paymentLink"),
      montant: "50 000 FCFA",
      statut: "Expiré",
    },
    {
      ID_transaction: "245YUFS3AS",
      date: "20-01-2024",
      type: t("sendMoney"),
      montant: "50 000 FCFA",
      statut: t("completed"),
    },
    {
      ID_transaction: "77853FS3AS",
      date: "20-01-2024",
      type: t("sendMoney"),
      montant: "50 000 FCFA",
      statut: t("failed"),
    },
    {
      ID_transaction: "24893FS3AS",
      date: "20-01-2024",
      type: t("paymentLink"),
      montant: "50 000 FCFA",
      statut: "Expiré",
    },
    // ... additional transactions can follow the same structure
  ];
  type Transactions = (typeof transactions)[0];

  const renderCell = React.useCallback(
    (transaction: Transactions, columnKey: React.Key) => {
      const cellValue = transaction[columnKey as keyof Transactions];

      switch (columnKey) {
        case "ID_transaction":
          return <p> {transaction.ID_transaction}</p>;
        case "date":
          return <p> {transaction.date}</p>;
        case "statut":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[transaction.statut]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Icon name="ellipsis-vertical" />
                </span>
              </Tooltip>
              <Tooltip content="Supprimer">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Icon name="trash-2" />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const classNames = React.useMemo(
    () => ({
      wrapper: ["min-h-[25rem]", "rounded-none", "border-0", "shadow-none"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "bg-transparent border-b border-divider",
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table classNames={classNames} aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={transactions}>
        {(item) => (
          <TableRow  key={item.ID_transaction}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
