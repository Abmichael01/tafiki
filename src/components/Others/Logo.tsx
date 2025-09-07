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

const Logo: React.FC<LogoProps> = ({ className, noLink, width, color = 'black' }) => {
  const logoSrc = color === 'white' ? '/logoWhite.png' : '/logo.png';
  
  return (
    <Link to={noLink ? "" : "/"} className={cn(noLink && "pointer-events-none")}>
      <img
        src={logoSrc}
        alt="Logo"
        className={cn('w-[120px]', className)}
        width={width || 120}
      />
    </Link>
  )
}

export default Logo