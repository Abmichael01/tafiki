import Form from "@/components/Drivers/ReceiveOrder/Form";
import { useSearchParams } from "react-router-dom";
import Otp from "../../components/Drivers/ReceiveOrder/Otp";
import DeliverySuccess from "../../components/Drivers/ReceiveOrder/DeliverySuccess";

export default function DriversDeliveryForm() {
  const [params] = useSearchParams();
  const current = params.get("current") || "1";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <div className="space-y-[15px] w-full">
          {/* Header */}
          {current !== "3" && (
            <div className="space-y-[15px] text-center">
              <img src="/logo.png" alt="" className="w-[67px] mx-auto" />
              <div>
                <h1 className="text-[20px] font-bold text-primary">
                  Driver Delivery Form
                </h1>
                <p className="text-[12px] font-satoshi font-medium">
                  Form to be filled by Driver
                </p>
              </div>
            </div>
          )}
          {current === "1" && <Form />}
          {current === "2" && <Otp />}
          {current === "3" && <DeliverySuccess />}
        </div>
      </div>
    </div>
  );
}
