import { useVendor } from "@/hooks/useVendor";
import TransactionCardList from "@/components/RetailShop/TransactionCardList";
import { useNavigate } from "react-router-dom";

export default function Transactions() {
  const navigate = useNavigate();
  const { vendor, isVendorLoaded } = useVendor();

  if (!isVendorLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-red-600">Vendor information not available</p>
      </div>
    );
  }

  // Use transactions from vendor store
  const transactions = vendor.transactions || [];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button onClick={() => navigate("/retail-shop")} className="text-xs border px-4 py-1 rounded text-gray-400 cursor-pointer hover:text-gray-600">
        Back
      </button>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Remittance History</h1>
        <p className="text-gray-600 mt-2">View all your remittance transactions</p>
      </div>

      {/* Transactions Cards */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <TransactionCardList 
          transactions={transactions}
          title="All Remittances"
          emptyMessage="No remittance transactions found"
        />
      </div>
    </div>
  );
}
