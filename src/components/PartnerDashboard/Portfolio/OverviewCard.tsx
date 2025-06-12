import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string; 
}

const OverviewCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(
        'bg-[#15221B] rounded-[8px] text-white py-6 px-8 flex flex-col gap-[10px] relative overflow-hidden',
        className
    )}>
        {/* Background SVG Lines */}
        <svg 
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" 
            viewBox="0 0 400 200" 
            preserveAspectRatio="none"
        >
            {/* Random wavy lines */}
            <path 
                d="M-50,30 Q100,10 200,40 T450,35" 
                stroke="#22c55e" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
            />
            <path 
                d="M-30,80 Q80,100 180,70 T420,85" 
                stroke="#16a34a" 
                strokeWidth="1.5" 
                fill="none" 
                opacity="0.5"
            />
            <path 
                d="M-40,140 Q120,160 250,130 T480,145" 
                stroke="#22c55e" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.4"
            />
            <path 
                d="M-20,180 Q150,200 300,170 T500,185" 
                stroke="#16a34a" 
                strokeWidth="1.5" 
                fill="none" 
                opacity="0.3"
            />
            
            {/* Diagonal lines */}
            <line 
                x1="300" y1="-20" 
                x2="450" y2="80" 
                stroke="#22c55e" 
                strokeWidth="1" 
                opacity="0.4"
            />
            <line 
                x1="350" y1="120" 
                x2="500" y2="220" 
                stroke="#16a34a" 
                strokeWidth="1" 
                opacity="0.3"
            />
        </svg>
        
        {children}
    </div>
  )
}

export default OverviewCard