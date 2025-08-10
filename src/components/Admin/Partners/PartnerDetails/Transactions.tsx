import { Transaction } from "@/types/admin";
import TransactionList from "../../Transactions/TransactionList";

// Transaction data for demo (replace with real data as needed)
// const transactions = [
//   {
//     type: "Remittance Received",
//     time: "2025-01-21T08:12:00",
//     amount: "£2350",
//     status: "remittance",
//     isCredit: true,
//   },
//   {
//     type: "Withdrawal",
//     time: "2025-01-21T15:12:00",
//     amount: "£2350",
//     status: "withdrawal",
//     isDebit: true,
//   },
//   {
//     type: "Remittance Received",
//     time: "2025-01-21T12:24:00",
//     amount: "£2350",
//     status: "remittance",
//     isCredit: true,
//   },
//   {
//     type: "Remittance Received",
//     time: "2025-01-21T09:41:00",
//     amount: "£2350",
//     status: "remittance",
//     isCredit: true,
//   },
//   {
//     type: "Withdrawal",
//     time: "2025-01-21T09:41:00",
//     amount: "£2350",
//     status: "withdrawal",
//     isDebit: true,
//   },
//   {
//     type: "Wallet Fund",
//     time: "2025-01-21T09:41:00",
//     amount: "£2350",
//     status: "remittance",
//     isCredit: true,
//   },
// ];

export default function Transactions({ showViewAll = true }: { showViewAll: boolean }) {
  return (
    <TransactionList transactions={[] as Transaction[]} heading="Transactions" showViewAll={showViewAll} viewAllLink="/admin/partners/1/transactions" vendor={false} />
  );
};

