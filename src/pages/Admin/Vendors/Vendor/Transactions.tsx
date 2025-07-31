
import Info from "@/components/Admin/Vendors/VendorDetails/Info";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TransactionsList from "@/components/Admin/Vendors/VendorDetails/Transactions";
import PageTitle from "@/components/ui/PageTitle";

export default function Transactions() {
    return (
        <div className="space-y-10">
            <PageTitle 
                subtitle="John Doe"
                title="Transactions" 
                showBack={true} 
            />
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