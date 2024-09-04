import React from 'react'
import { greetings } from '@/app/lib/data'

export default function CardGreetings() {
  return (
    <div className='border border-black p-4'>
       <p className='whitespace-pre-wrap text-justify'>
        {greetings.description}
       </p>
    </div>
  )
}
