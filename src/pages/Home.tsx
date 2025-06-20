import HowWeOperate from '@/components/LandingPage/HowWeOperate'
import Hero from '@/components/Site/Home/Hero'
import HowItWorks from '@/components/Site/Home/HowItWorks'
import NewsLetter from '@/components/Site/Home/NewsLetter'
import OurFacility from '@/components/Site/Home/OurFacility'
import OurStandards from '@/components/Site/Home/OurStandards'
import OurTaste from '@/components/Site/Home/OurTaste'
import Testimonials from '@/components/Site/Home/Testimonials'
import Welcome from '@/components/Site/Home/Welcome'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
        <Hero />
        <Welcome />
        <OurFacility />
        <OurStandards />
        <HowItWorks />
        <OurTaste  />
        <HowWeOperate title />
        <Testimonials />
        <NewsLetter />
    </div>
  )
}

export default Home