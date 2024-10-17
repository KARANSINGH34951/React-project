import React from 'react'
import img from "./Cards-img/pizza.png"

const ServiceCard = () => {
  return (
    <div className='text-center p-6 justify-center items-center h-14 w-80 hover:bg-blue-800'>
      <div className='flex items-center justify-center '>
      <img className='h-24 w-46' src={img} alt="img"/>
      </div>
      <h4 className='my-2'>Corporate Catering</h4>
      <h6>Contrary to popular belief, ipsum is not simply random.

      </h6>
    </div>
  )
}

export default ServiceCard