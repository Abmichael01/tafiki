import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string; 
}

const OverviewCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(
        'bg-[#15221B] rounded-[8px] text-white py-6 px-8 flex flex-col gap-[10px]',
        className
    )}>
        {children}
    </div>
  )
}

export default OverviewCard