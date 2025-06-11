import { BadgeCheck } from 'lucide-react'
import React from 'react'

const Success: React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center space-y-[20px]'>
        <h2 className="text-[#15221B] text-[28px]">You’re all Set, Partner!</h2>
        <BadgeCheck className='text-white fill-[#16A34A] size-[127.45px]' />
    </div>
  )
}

export default Success