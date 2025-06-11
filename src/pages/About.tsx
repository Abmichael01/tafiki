import Allergy from '@/components/Site/About/Allergy'
import AtFoodHybrid from '@/components/Site/About/AtFoodHybrid'
import Expertise from '@/components/Site/About/Expertise'
import Hero from '@/components/Site/About/Hero'
import OurStandards from '@/components/Site/About/OurStandards'
import RootedAndDriven from '@/components/Site/About/RootedAndDriven'
import Welcome from '@/components/Site/About/Welcome'
import NewsLetter from '@/components/Site/Home/NewsLetter'
import React from 'react'

const About: React.FC = () => {
  return (
    <div>
        <Hero />
        <Welcome />
        <RootedAndDriven />
        <OurStandards />
        <Allergy />
        <Expertise />
        <AtFoodHybrid />
        <NewsLetter />
    </div>
  )
}

export default About