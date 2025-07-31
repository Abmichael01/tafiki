import Form from "@/components/Vendor/Form";
import { useSearchParams } from "react-router-dom";
import Otp from "../../components/Vendor/Otp";
import DeliverySuccess from "../../components/Vendor/DeliverySuccess";

export default function DeliveryForm() {
    const [params] = useSearchParams();
    const current = params.get("current") || "1";
  return (
    <div className="min-h-screen space-y-[15px]">
      {/* Header */}
      <div className="space-y-[15px]">
        <img src="/logo.png" alt="" className="w-[67px]" />
        <div>
          <h1 className="text-[20px] font-bold text-primary">Delivery Form</h1>
          <p className="text-[12px] font-satoshi font-medium">
            Form to be filled by Vendor
          </p>
        </div>
      </div>
      {current === "1" && <Form />}
      {current === "2" && <Otp />}
      {current === "3" && <DeliverySuccess />}
    </div>
  );
}
