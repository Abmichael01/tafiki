import TransactionsList from "@/components/Admin/Transactions/TransactionList";
import PageTitle from "@/components/ui/PageTitle";

// Dynamically generate "today" and "yesterday" dates in ISO format
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

function toISODateString(date: Date, hour: number, minute: number) {
  const d = new Date(date);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
}

const transactions = [
  // Today
  {
    type: "Remittance received from Vendor 345",
    time: toISODateString(today, 8, 12),
    amount: "£2350",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Withdrawal - Doe 345",
    time: toISODateString(today, 15, 12),
    amount: "£2350",
    status: "withdrawal",
    isDebit: true,
  },
  {
    type: "Remittance received from Vendor 345",
    time: toISODateString(today, 12, 24),
    amount: "£2350",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Remittance paid to Doe345",
    time: toISODateString(today, 9, 41),
    amount: "£2350",
    status: "remittance",
    isDebit: true,
  },
  {
    type: "Remittance received from Vendor 345",
    time: toISODateString(today, 9, 41),
    amount: "£2350",
    status: "remittance",
    isCredit: true,
  },
  // Yesterday
  {
    type: "Remittance received from Vendor 345",
    time: toISODateString(yesterday, 8, 12),
    amount: "£2350",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Withdrawal - Doe 345",
    time: toISODateString(yesterday, 15, 12),
    amount: "£2350",
    status: "withdrawal",
    isDebit: true,
  },
  {
    type: "Remittance paid to Doe345",
    time: toISODateString(yesterday, 12, 24),
    amount: "£2350",
    status: "remittance",
    isDebit: true,
  },
  {
    type: "Remittance received from Vendor 345",
    time: toISODateString(yesterday, 9, 41),
    amount: "£2350",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Remittance received from Vendor 345",
    time: toISODateString(yesterday, 9, 41),
    amount: "£2350",
    status: "remittance",
    isCredit: true,
  },
  // Older dates (static, not matching today/yesterday)
  {
    type: "Remittance received from Vendor 345",
    time: "2025-01-19T10:30:00",
    amount: "£1800",
    status: "remittance",
    isCredit: true,
  },
  {
    type: "Withdrawal - Doe 345",
    time: "2025-01-18T14:20:00",
    amount: "£3200",
    status: "withdrawal",
    isDebit: true,
  },
  {
    type: "Remittance paid to Doe345",
    time: "2025-01-17T11:15:00",
    amount: "£950",
    status: "remittance",
    isDebit: true,
  },
];

export default function Transactions() {
    return (
        <div className="space-y-10">
            <PageTitle title="Transactions" />
            <TransactionsList transactions={transactions} vendor={false} groupByDate={true} />
        </div>
    );
}