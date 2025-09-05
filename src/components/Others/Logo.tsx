import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  noLink?: boolean;
  width?: number;
  height?: number;
  color?: 'white' | 'black';
}

const Logo: React.FC<LogoProps> = ({ className, noLink, width, height, color = 'black' }) => {
  const logoSrc = color === 'white' ? '/logoWhite.svg' : '/logo.svg';
  
  return (
    <Link to={noLink ? "" : "/"} className={cn(noLink && "pointer-events-none")}>
      <img
        src={logoSrc}
        alt="Logo"
        className={cn('w-[120px] h-[60.8px]', className)}
        width={width || 120}
        height={height || 60.8}
      />
    </Link>
  )
}

export default Logo