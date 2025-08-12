import image from "@/assets/images/garriProduct.webp";

interface DeliveryToProps {
  avatarSrc?: string; // URL of the avatar image
  companyName?: string;
  address?: string;
}

export default function DeliveryTo({
  companyName = "Kapac Ventures",
  address = "16, Admiralty phase, Queensway, London",
}: DeliveryToProps) {
  return (
    <div className="space-y-4 border-y py-[20px]">
      <h2 className="font-[600] text-[18px]">Delivery to</h2>
      <div className="flex items-center space-x-4 p-4 bg-whit font-satoshi">
        {/* Avatar */}
        <img
          src={image}
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />

        {/* Content */}
        <div>
          {/* Company Name */}
          <p className="text-[18px] font-[700] text-[#252525]">{companyName}</p>

          {/* Address */}
          <p className="text-[16px] font-[500] text-[#6E6E6E]">{address}</p>
        </div>
      </div>
    </div>
  );
}
