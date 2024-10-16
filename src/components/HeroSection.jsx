import React from 'react'
import hero from "../assets/Herosection/hero.png"

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-10 bg-white">

<div className='bg-white flex flex-col justify-center items-center m-10'>
  <h1 className='text-black text-8xl text-center mb-8'>Book CaterServ For <br /> Your Dream Event</h1>
  <div className='flex space-x-4'>
    <button className='bg-black text-white py-3 px-6 rounded-md'>Book Now</button>
    <button className='bg-black text-white py-3 px-6 rounded-md'>Know More</button>
  </div>
</div>


      <div>
        <img src={hero} alt='img'></img>
      </div>
      
  </div>
  )
}

export default HeroSection