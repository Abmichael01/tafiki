import Hero from '@/components/Site/Home/Hero'
import HowItWorks from '@/components/Site/Home/HowItWorks'
import NewsLetter from '@/components/Site/Home/NewsLetter'
import OurFacility from '@/components/Site/Home/OurFacility'
import OurStandards from '@/components/Site/Home/OurStandards'
import OurTaste from '@/components/Site/Home/OurTaste'
import Testimonials from '@/components/Site/Home/Testimonials'
import Welcome from '@/components/Site/Home/Welcome'
import React from 'react'
import Vendors from '@/components/Site/Home/Vendors'
import FoodSafety from '@/components/Site/Home/FoodSafety'
import FlowChart from '@/components/Site/Home/FlowChart'
import CoreBenefits from '@/components/Site/Home/CoreBenefits'
import Promise from '@/components/Site/Home/Promise'
import Gallery from '@/components/Site/Home/Gallery'

const Home: React.FC = () => {
  return (
    <div>
        <Hero />
        <Vendors />
        <Welcome />
        <FoodSafety />
        <OurStandards />
        <OurFacility />
        <HowItWorks />
        <FlowChart />
        <CoreBenefits />
        <OurTaste  />
        <Promise />
        <Testimonials />
        <NewsLetter />
        <Gallery />
    </div>
  )
}

export default Home