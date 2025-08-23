import Form from "@/components/RetailShop/ReceiveOrder/Form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Otp from "../../components/RetailShop/ReceiveOrder/Otp";
import DeliverySuccess from "../../components/RetailShop/ReceiveOrder/DeliverySuccess";

export default function DeliveryForm() {
  const [params] = useSearchParams();
  const current = params.get("current") || "1";
  const navigate = useNavigate();
  return (
    <div className="space-y-[15px] w-full">
      {current !== "3" && (
        <button
          onClick={() => navigate(-1)}
          className="text-xs border px-4 py-1 rounded text-gray-400 cursor-pointer hover:text-gray-600"
        >
          Back
        </button>
      )}
      {/* Header */}
      {current !== "3" && (
        <div className="space-y-[15px]">
          <img src="/logo.png" alt="" className="w-[67px]" />
          <div>
            <h1 className="text-[20px] font-bold text-primary">
              Delivery Form
            </h1>
            <p className="text-[12px] font-satoshi font-medium">
              Form to be filled by Retail Shop
            </p>
          </div>
        </div>
      )}
      {current === "1" && <Form />}
      {current === "2" && <Otp />}
      {current === "3" && <DeliverySuccess />}
    </div>
  );
}
