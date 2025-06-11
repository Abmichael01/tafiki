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
  const filteredOrders = orders?.filter( order => {
    if (currentTab === "processing") return order.status === "pending";
    if (currentTab === "ongoing") return order.status === "ongoing" || order.status === "Approved";
    if (currentTab === "history") return order.status === "settled";
  })

  return (
    <div className='space-y-10 h-full w-full'>
      <Tab />
      <Orders orders={filteredOrders} tab={currentTab as string} />
    </div>
  )
}

export default MyOrders