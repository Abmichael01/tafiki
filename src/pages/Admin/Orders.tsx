import { historyOrders, ongoingOrders } from '@/components/Admin/Orders/OrdersList/mockData'
import OrdersList from '@/components/Admin/Orders/OrdersList/OrdersList'
import Tab from '@/components/Admin/Orders/Tab'
import { Order } from '@/types/admin'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import PageTitle from '@/components/ui/PageTitle'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/adminEndpoints'

const Orders: React.FC = () => {
  const [params] = useSearchParams();
  const currentTab = params.get("tab");
  const ordersData = currentTab === "ongoing" ? ongoingOrders : historyOrders

  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders
  })

  console.log(data)

  return (
    <div className='space-y-10 h-full w-full'>
      <PageTitle title={`Orders (${ordersData.length})`} />
      <Tab />
      <OrdersList orders={data?.results as Order[]}  tab={currentTab as string} />
    </div>
  )
}

export default Orders
