import React from "react";
import { FaBoxOpen, FaTruck, FaStore } from "react-icons/fa";
import { MdWarehouse, MdAttachMoney } from "react-icons/md";
import { AiOutlineSync } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";

// Data arrays
const howItWorksData = [
  {
    title: "Fund Food Products Virtually",
    desc: "Entrepreneurs invest in inventory without handling any goods.",
    icon: <FaBoxOpen className="w-10 h-10 text-[#d8291b]" />,
  },
  {
    title: "Tafiki Fulfil Orders to Shops",
    desc: "We deliver directly to partnered retailers from manufacturers.",
    icon: <FaTruck className="w-10 h-10 text-[#d8291b]" />,
  },
  {
    title: "Retailers Sell & Pay After Sales",
    desc: "Retailers stock shelves with no upfront cost. Tafiki collects payments after sales.",
    icon: <FaStore className="w-10 h-10 text-[#d8291b]" />,
  },
];

const benefitsData = [
  {
    title: "No Warehouse Needed",
    desc: "Entrepreneurs invest in inventory without handling any warehouse.",
    icon: <MdWarehouse className="w-10 h-10 text-[#d8291b]" />,
  },
  {
    title: "Zero Upfront Cost for Shops",
    desc: "Retailers stock shelves on credit, pay only after sales.",
    icon: <MdAttachMoney className="w-10 h-10 text-[#d8291b]" />,
  },
  {
    title: "Real-Time Inventory Matching",
    desc: "Low risk & quick turnaround powered by AI.",
    icon: <AiOutlineSync className="w-10 h-10 text-[#d8291b]" />,
  },
  {
    title: "Supports Small Businesses",
    desc: "Reduce food waste with smart routing.",
    icon: <HiShieldCheck className="w-10 h-10 text-[#d8291b]" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-[120px] md:mt-[180px] space-y-16 bg-white text-center section-padding">
      {/* How It Works */}
      <div>
        <h2 className="text-xl font-bold mb-8 uppercase text-[#15221B]">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {howItWorksData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center space-y-3 p-4 rounded-xl transition"
            >
              {item.icon}
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <a href="#" className="text-green-700 underline mt-4 block">
          See Fulfillment Flow ›
        </a>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-xl font-bold mb-8 uppercase text-[#15221B]">
          Benefits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
          {benefitsData.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center space-y-3 p-5 py-8 bg-[#d8291b]/5 rounded-lg"
            >
              {item.icon}
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
