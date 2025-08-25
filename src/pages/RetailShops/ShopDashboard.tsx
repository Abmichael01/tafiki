import { Package, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShopDashboard() {
  return (
    <div className="space-y-3 flex flex-col">
      <div className="text-center mb-6">
        <h1 className="text-sm ">Store #5663</h1>
        <h2 className="text-xl ">What are you doing today?</h2>
      </div>
      <Link to="#" className="w-full">
        <button className="w-full px-5 flex gap-2 items-center justify-center py-3 rounded-sm bg-primary hover:bg-primary/90 text-white text-sm cursor-pointer transition-all duration-300">
          View Orders <Package size={18} />{" "}
        </button>
      </Link>
      <Link to="/retail-shop/remittance" className="w-full">
        <button className="w-full px-5 flex gap-2 items-center justify-center py-3 rounded-sm bg-primary hover:bg-primary/90 text-white text-sm cursor-pointer transition-all duration-300">
          Remit <Wallet size={18} />
        </button>
      </Link>
    </div>
  );
}
