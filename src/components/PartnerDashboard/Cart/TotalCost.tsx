import useCartStore from '@/stores/cartStore'
import React from 'react'

const TotalCost: React.FC = () => {
    const { items } = useCartStore()
    const total_amount = items.reduce((sum, item) => sum + item.price, 0)
    
  return (
    <div className="space-y-[8px] text-[14px] font-satoshi">
        <div className="flex items-center justify-between">
            <h2 className="">Item(s) Total</h2>
            <p className="">£{total_amount}</p>
        </div>
        <div className="flex items-center justify-between">
            <h2 className="">Delivery</h2>
            <p className="">£50</p>
        </div>
        <div className="flex items-center justify-between px-[24px] py-[12px] bg-[#F9F9F9]">
            <h2 className="text-[16px] font-[700]">Total Cost</h2>
            <p className="text-[20px] font-[700]">£{total_amount+50}</p>
        </div>
    </div>
  )
}

export default TotalCost