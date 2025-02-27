import React from 'react'
import Feedback from './Feedback'
import Main from './Main'

export default function Footer() {
  return (
    <div className='py-36 pl-16 pr-36 bg-dark-gray flex flex-row gap-11'>
      <Feedback/>
      <Main/>
      </div>
  )
}
