import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TransactionsList from "@/components/Admin/Vendors/VendorDetails/Transactions";

export default function Transactions() {
    const { id } = useParams();
    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[8px]">
                    <Link to={`/admin/vendors/${id}`}>
                        <GoArrowLeft className="size-[24px]" />
                    </Link>
                    <h1 className="text-[24px]">Transactions</h1>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <Info />
                <div className="">
                    <Select
                        defaultValue="all"
                        onValueChange={(value) => {
                            // Debug: print selected filter
                            console.log("Selected filter:", value);
                        }}
                    >
                        <SelectTrigger className="w-fit min-w-[100px] rounded-[4px]">
                            <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="remittance">Remittance</SelectItem>
                            <SelectItem value="withdrawal">Withdrawal</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <TransactionsList showViewAll={false} />
        </div>
    );
}