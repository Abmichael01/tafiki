import React from "react";
import NotificationsList from "@/components/Admin/Notification/NotificationsList";
import { Notification } from "@/components/Admin/Notification/NotificationsList";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const Notifications: React.FC = () => {
  // Sample data matching the image
  const notifications: Notification[] = [
    // Today
    {
      id: "1",
      type: "remittance",
      message: "£2,350 received from Kapac Ventures",
      time: new Date().toISOString(),
    },
    {
      id: "2",
      type: "withdrawal",
      message: "Request of £2350 from John Doe",
      time: new Date().toISOString(),
    },
    {
      id: "3",
      type: "remittance",
      message: "£2,350 received from Kapac Ventures",
      time: new Date().toISOString(),
    },
    {
      id: "4",
      type: "order",
      message: "Order #9131 successfully delivered to vendor!",
      time: new Date().toISOString(),
    },
    // Yesterday
    {
      id: "5",
      type: "order",
      message: "Order #9131 successfully delivered to Vendor!",
      time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "6",
      type: "remittance",
      message: "£2,350 received from Kapac Ventures",
      time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "7",
      type: "withdrawal",
      message: "Request of £2350 from John Doe",
      time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    // 21st Jan. 2025
    {
      id: "8",
      type: "remittance",
      message: "£2,350 received from Kapac Ventures",
      time: "2025-01-21T09:07:00",
    },
    {
      id: "9",
      type: "order",
      message: "Order #9131 successfully delivered to vendor!",
      time: "2025-01-21T09:07:00",
    },
    {
      id: "10",
      type: "withdrawal",
      message: "Request of £2350 from John Doe",
      time: "2025-01-21T09:07:00",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
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

      <NotificationsList notifications={notifications} />
    </div>
  );
};

export default Notifications;
