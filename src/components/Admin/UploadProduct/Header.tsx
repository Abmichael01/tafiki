import orderBox from "@/assets/svgs/orderBox.svg";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Header({ title, description }: { title: string; description?: string }) {
    const [params] = useSearchParams()
    const current = params.get("current") || "landing"
    const naivgate = useNavigate()
  return (
    <div className="space-y-3 flex flex-col items-center relative">
        { current !== 'landing' && <ArrowLeft onClick={() => naivgate(-1)} className="w-[20px] text-[#494949] absolute top-[10px] left-[10px]" />}
      <div className="p-[15px] bg-primary/20 rounded-full w-fit">
        <img title="Order box" src={orderBox} className="size-[20px]" />
      </div>
      <h2 className="font-[700] text-[20px] text-primary">{title}</h2>
      <p className="text-[12px] font-[500] -mt-3">{description}</p>
    </div>
  );
}
