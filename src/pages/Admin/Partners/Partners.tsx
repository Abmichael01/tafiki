import Overview from "@/components/Admin/Partners/Overview";
import PartnerList from "@/components/Admin/Partners/PartnersList";

export default function Partners() {
  return (
    <div className="space-y-10 h-full w-full">
      <h2 className="text-[24px] font-[600]">
        Partners
      </h2>
      <Overview />
      <PartnerList />
    </div>
  );
}
