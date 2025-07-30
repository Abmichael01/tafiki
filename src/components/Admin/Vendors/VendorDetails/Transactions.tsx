import TransactionList from "../../Transactions/TransactionList";

// Transaction data for demo (replace with real data as needed)
const transactions = [
  {
    type: "Remittance - Order #5210",
    time: "2025-01-21T08:12:00",
    amount: "£2350",
    status: "remittance",
  },
  {
    type: "Remittance - Order #5211",
    time: "2025-01-21T10:45:00",
    amount: "£1800",
    status: "remittance",
  },
  {
    type: "Remittance - Order #5212",
    time: "2025-01-20T14:20:00",
    amount: "£3200",
    status: "remittance",
  },
  {
    type: "Remittance - Order #5213",
    time: "2025-01-19T11:15:00",
    amount: "£950",
    status: "remittance",
  },
  {
    type: "Remittance - Order #5214",
    time: "2025-01-18T09:30:00",
    amount: "£2100",
    status: "remittance",
  },
];


export default function Transactions({ showViewAll = true }: { showViewAll: boolean }) {
  return (
    <TransactionList transactions={transactions} heading="Transactions" showViewAll={showViewAll} viewAllLink="/admin/vendors/1/transactions" vendor={true} />
  );
};

