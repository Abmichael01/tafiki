import GetInTouch from '@/components/Site/Contact/GetInTouch'
import LocatedAt from '@/components/Site/Contact/LocatedAt'
import SendMessage from '@/components/Site/Contact/SendMessage'
import NewsLetter from '@/components/Site/Home/NewsLetter'
import React from 'react'

const Contact: React.FC = () => {
  return (
    <div>
        <GetInTouch />
        <LocatedAt />
        <SendMessage />
        <NewsLetter />
    </div>
  )
}

export default Contact