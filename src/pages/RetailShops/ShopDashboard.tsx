import { Package, Wallet, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useVendor } from "@/hooks/useVendor";
import useAuthStore from "@/stores/authStore";

export default function ShopDashboard() {
  const { vendor, isVendorLoaded } = useVendor();
  const { logout } = useAuthStore();
  console.log(vendor);
  return (
    <div className="space-y-3 flex flex-col">
      <div className="text-center mb-4">
        <h1 className="text-sm text-gray-600">
          {isVendorLoaded && vendor ? vendor.store_name : "Loading..."}
        </h1>
        <h2 className="text-xl font-semibold">What are you doing today?</h2>
        {/* {vendor && (
          <p className="text-sm text-gray-500 mt-1">
            Store ID: {vendor.vendor_id}
          </p>
        )} */}
      </div>
      <Link to="/retail-shop/remittance" className="w-full">
        <button className="w-full px-5 flex gap-2 items-center justify-center py-3 rounded-sm bg-primary hover:bg-primary/90 text-white text-sm cursor-pointer transition-all duration-300">
          Remit <Wallet size={18} />
        </button>
      </Link>
      <Link to="/retail-shop/orders" className="w-full">
        <button className="w-full px-5 flex gap-2 items-center justify-center py-3 rounded-sm bg-primary hover:bg-primary/90 text-white text-sm cursor-pointer transition-all duration-300">
          View Orders <Package size={18} />{" "}
        </button>
      </Link>
      <Link to="/retail-shop/transactions" className="w-full">
        <button className="w-full px-5 flex gap-2 items-center justify-center py-3 rounded-sm bg-primary hover:bg-primary/90 text-white text-sm cursor-pointer transition-all duration-300">
          Transactions <Wallet size={18} />
        </button>
      </Link>
      <button
        onClick={logout}
        className="w-full px-5 flex gap-2 items-center justify-center py-3 rounded-sm bg-primary/10 hover:bg-primary/20 text-primary text-sm cursor-pointer transition-all duration-300"
      >
        Logout <LogOut size={18} />
      </button>
    </div>
  );
}
