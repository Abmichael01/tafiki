import Orders from '@/components/PartnerDashboard/MyOrders/Orders'
import Tab from '@/components/PartnerDashboard/MyOrders/Tab'
import useUserDetailsStore from '@/stores/userStore'
import { Order } from '@/types'
import React from 'react'
import { useSearchParams } from 'react-router-dom'



const MyOrders: React.FC = () => {
  const { userDetails } = useUserDetailsStore()
  const orders = userDetails?.investment_summary as Order[]
  const [params] = useSearchParams();
  const currentTab = params.get("tab");
  // The original logic for "ongoing" is incorrect.
  // "Ongoing" should be any status except "pending" and "settled".
  // We also add a fallback to return all orders if no tab is selected.
  const filteredOrders = orders?.filter(order => {
    if (currentTab === "processing") return order.status === "pending";
    if (currentTab === "ongoing") return order.status !== "pending" && order.status !== "settled";
    if (currentTab === "history") return order.status === "settled";
    // If no tab or unknown tab, return all orders
    return true;
  });

  return (
    <div className='space-y-10 h-full w-full'>
      <Tab />
      <Orders orders={filteredOrders} tab={currentTab as string} />
    </div>
  )
}

export default MyOrders