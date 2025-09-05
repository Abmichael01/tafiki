import Expertise from '@/components/Site/About/Expertise'
import Hero from '@/components/Site/About/Hero'
// import OurStandards from '@/components/Site/About/OurStandards'
import NewsLetter from '@/components/Site/Home/NewsLetter'
import React from 'react'
import GlobalFootprint from '@/components/Site/Home/GlobalFootprint'
import AtTafiki from '@/components/Site/About/AtTafiki'
import OurStandards from '@/components/Site/Home/OurStandards'
import OurFacility from '@/components/Site/Home/OurFacility'
import FoodSafety from '@/components/Site/Home/FoodSafety'
import Tafiki from '@/components/Site/About/Tafiki'

const About: React.FC = () => {
  return (
    <div>
        <Hero />
        <GlobalFootprint />
        <AtTafiki />
        <OurStandards />
        <OurFacility />
        <FoodSafety />
        <Expertise />
        <Tafiki />
        <NewsLetter />
    </div>
  )
}

export default About