import { historyOrders, ongoingOrders } from '@/components/Admin/Orders/OrdersList/mockData'
import OrdersList from '@/components/Admin/Orders/OrdersList/OrdersList'
import Tab from '@/components/Admin/Orders/Tab'
import { Order } from '@/types/admin'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Orders: React.FC = () => {
  const [params] = useSearchParams();
  const currentTab = params.get("tab");
  const data = currentTab === "ongoing" ? ongoingOrders : historyOrders

  return (
    <div className='space-y-10 h-full w-full'>
      <h2 className="text-[24px] font-[600]">
        Orders <span className="font-normal text-[16px]">({data.length})</span>
      </h2>
      <Tab />
      <OrdersList orders={data as Order[]}  tab={currentTab as string} />
    </div>
  )
}

export default Orders
