import AnswerToQuestions from '@/components/Site/FAQ/AnswerToQuestions'
import NewsLetter from '@/components/Site/Home/NewsLetter'
import Hero from '@/components/Site/RewardLoyaltyProgram/Hero'
import JoinUs from '@/components/Site/RewardLoyaltyProgram/JoinUs'
import MaximizeEarnings from '@/components/Site/RewardLoyaltyProgram/MaximizeEarnings'
import Value from '@/components/Site/RewardLoyaltyProgram/Value'
import React from 'react'

const RewardLoyaltyProgram: React.FC = () => {
  return (
    <div>
        <Hero />
        <Value />
        <MaximizeEarnings />
        <JoinUs />
        <AnswerToQuestions />
        <NewsLetter />
    </div>
  )
}

export default RewardLoyaltyProgram