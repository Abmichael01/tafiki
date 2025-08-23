import { BadgeCheck } from 'lucide-react'
import React from 'react'

const Success: React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center space-y-[20px]'>
        <h2 className="text-[#15221B] text-[20px] md:text-[24px] text-center">Welcome to FoodHybrid!</h2>
        <p className="text-[#6E6E6E] text-center">Your retail shop account has been created successfully.</p>
        <BadgeCheck className='text-white fill-[#16A34A] size-[100px] md:size-[127.45px]' />
    </div>
  )
}

export default Success
