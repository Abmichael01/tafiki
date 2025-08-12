import { useParams } from "react-router-dom";
import Overview from "../../../../components/Admin/Partners/PartnerDetails/Overview";
import { MailIcon } from "lucide-react";
import RecentOrders from "@/components/Admin/Overview/RecentOrders";
import Transactions from "../../../../components/Admin/Partners/PartnerDetails/Transactions";
import Info from "../../../../components/Admin/Partners/PartnerDetails/Info";
import ContactDetails from "@/components/Admin/ContactDetails";
import { AiOutlinePhone } from "react-icons/ai";
import PageTitle from "@/components/ui/PageTitle";
import { Order, Partner, Transaction } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";
import { getPartner } from "@/api/adminEndpoints";
import LoadingData from "@/components/Admin/LoadingData";

const PartnerDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["partner", id],
    queryFn: () => getPartner(id as string),
  });

  const partner = data?.partner
  const orders = data?.orders
  const trasactions = data?.transactions
  const summary = data?.summary


  const contactData = [
    {
      label: "Phone",
      value: String(partner?.phone),
      icon: AiOutlinePhone,
    },
    {
      label: "Email",
      value: String(partner?.email),
      icon: MailIcon,
    },
    {
      label: "Address",
      value: String(partner?.address),
    },
  ];

  console.log(data);

  if (isLoading) return <LoadingData />;

  return (
    <div className="space-y-10">
      {/* Header: Back and Title */}
      <PageTitle title="Partners" subtitle={partner?.name} showBack={true} />
      {/* Profile and Remittance Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Info data={partner as Partner} />
        <button className="bg-[#1C274C1A] text-[#1C274C] rounded-[4px] flex items-center justify-center gap-[4px] opacity-100 px-[10px] py-[4px] text-[14px] sm:text-[16px] w-fit">
          Due for remittance
        </button>
      </div>
      {/* Overview Cards */}
      <Overview data={summary} />
      {/* Contact Info */}
      <ContactDetails data={contactData} />
      <RecentOrders
        data={orders as Order[]}
        status={true}
        link={`/admin/partners/${id}/orders`}
      />
      <Transactions data={trasactions as Transaction[]} showViewAll={true} />
    </div>
  );
};

export default PartnerDetails;
