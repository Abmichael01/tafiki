import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Others/Logo'
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useSidebarStore } from '@/stores/sidebarStore';
import MobileNavbar from './MobileNavbar';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/animations';

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Reward & Loyalty', href: '/reward-loyalty-program' },
  { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const { pathname } = useLocation();
  const { toggle } = useSidebarStore();
  
  return (
    <>
      <div className='section-padding w-full flex justify-between items-center py-[40px] absolute top-0 left-0 right-0 z-[9999]'>
          <motion.div 
            initial="initial"
            animate="animate"
            variants={slideInLeft}
          >
            <Logo className='w-[84px] shrink-0' />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="hidden lg:flex gap-8 px-6 py-2 backdrop-blur-lg rounded-full shadow-xl"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                custom={index}
              >
                <Link to={item.href} className={cn("text-[#5D5D5D] hover:text-primary transition-colors text-sm", pathname === item.href && "text-[#F87525]")}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            onClick={toggle}
            className="lg:hidden bg-transparent border border-priamry text-primary p-2 rounded-full"
          >
            <Menu className="w-5 h-5" />
          </motion.button>

          {/* Desktop Login Button */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={slideInRight}
            className="hidden lg:block"
          >
            { pathname === "/home" && <button className="hidden lg:block bg-transparent border border-white text-sm text-white px-6 py-2 rounded-full">
              Login
            </button>}
            { pathname === "/about" && <button className="hidden lg:block bg-primary text-sm text-white px-6 py-2 rounded-full">
              Get Started
            </button>}
            { pathname === "/reward-loyalty-program" && <button className="hidden lg:block bg- border border-primary text-sm text-primary px-6 py-2 rounded-full">
              Get Started
            </button>}
            { pathname === "/contact" && <button className="hidden lg:block bg-transparent border border-white text-sm text-white px-6 py-2 rounded-full">
              Login
            </button>}
          </motion.div>

      </div>
      
      {/* Mobile Navigation */}
      <MobileNavbar />
    </>
  )
}
