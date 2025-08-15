import React from "react";
import NotificationsList from "@/components/Admin/Notification/NotificationsList";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "@/api/adminEndpoints";
import { Notification } from "@/types/admin";
import LoadingData from "@/components/Admin/LoadingData";

const Notifications: React.FC = () => {
  // Sample data matching the image

  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications
  })

  console.log(data)

  if(isLoading) return <LoadingData />

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

      <NotificationsList notifications={data as Notification[]} />
    </div>
  );
};

export default Notifications;
