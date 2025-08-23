import Form from "@/components/RetailShop/Remit/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Otp from "../../components/RetailShop/Remit/Otp";
import RemitSuccess from "../../components/RetailShop/Remit/RemitSuccess";

export default function Remittance() {
    const [params] = useSearchParams();
    const current = params.get("current") || "1";
    const navigate = useNavigate()
  return (
    <div className="space-y-[15px] w-full">
      { current !== "3" && <button onClick={() => navigate(-1) } className="text-xs border px-4 py-1 rounded text-gray-400 cursor-pointer hover:text-gray-600" >
        Back
      </button>}
      {current === "1" && <Form />}
      {current === "2" && <Otp />}
      {current === "3" && <RemitSuccess />}
    </div>
  );
}
