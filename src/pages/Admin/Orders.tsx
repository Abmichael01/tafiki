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

  
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders
  })
  
  const ongoingOrders = data?.results.filter(order => order.status === "pending" || order.status === "ongoing" )
  const historyOrders = data?.results.filter(order => order.status === "completed" )

  const ordersData = currentTab === "ongoing" ? ongoingOrders : historyOrders

  console.log(data)

  return (
    <div className='space-y-10 h-full w-full'>
      <PageTitle title={`Orders (${ordersData?.length})`} />
      <Tab />
      <OrdersList orders={ordersData as Order[]}  tab={currentTab as string} />
    </div>
  )
}

export default Orders
