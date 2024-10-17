import React from 'react'
import ServiceCard from './ServiceCard'

const OurService = () => {
  return (
    <div>
      <h1 className='text-center text-3xl'>OurService</h1>
      <h1 className='text-center text-3xl'>What We Offer ?</h1>
      <div className='grid grid-cols-4 m-10 bg-black'>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      </div>
    </div>
  )
}

export default OurService