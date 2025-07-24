import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  isAdmin?: boolean;
}

const OverviewCard: React.FC<Props> = ({ children, className, isAdmin = false }) => {
  const strokeColor1 = isAdmin ? '#1f2937' : '#22c55e'; // gray-800 or green
  const strokeColor2 = isAdmin ? '#374151' : '#16a34a'; // gray-700 or dark green

  return (
    <div
      className={cn(
        'bg-[#15221B] rounded-[8px] text-white py-6 px-8 flex flex-col gap-[10px] relative overflow-hidden',
        isAdmin && 'bg-white text-gray-900 border border-gray-200',
        className
      )}
    >
      {/* Background SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.1] pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
      >
        {/* Random wavy lines */}
        <path d="M-50,30 Q100,10 200,40 T450,35" stroke={strokeColor1} strokeWidth="2" fill="none" />
        <path d="M-30,80 Q80,100 180,70 T420,85" stroke={strokeColor2} strokeWidth="1.5" fill="none" />
        <path d="M-40,140 Q120,160 250,130 T480,145" stroke={strokeColor1} strokeWidth="1" fill="none" />
        <path d="M-20,180 Q150,200 300,170 T500,185" stroke={strokeColor2} strokeWidth="1.5" fill="none" />

        {/* Diagonal lines */}
        <line x1="300" y1="-20" x2="450" y2="80" stroke={strokeColor1} strokeWidth="1" />
        <line x1="350" y1="120" x2="500" y2="220" stroke={strokeColor2} strokeWidth="1" />
      </svg>

      {children}
    </div>
  );
};

export default OverviewCard;
