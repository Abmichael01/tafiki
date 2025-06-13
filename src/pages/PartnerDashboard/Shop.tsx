import ShopItems from '@/components/PartnerDashboard/Shop/ShopItems'
import React from 'react'

const Shop: React.FC = () => {
  return (
    <div className=' space-y-10 '>
      <h2 className="text-[24px] text-[#494949]">Market</h2>
      <ShopItems />
    </div>
  )
}

export default Shop