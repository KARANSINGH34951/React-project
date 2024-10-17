import React from 'react'

const HeroSection = () => {
  return (
    <div className="hero flex flex-col justify-center items-center text-center h-full p-4 md:p-8">
    <h1 className="font-bold text-1xl md:text-4xl lg:text-4xl xl:text-5xl text-white">Welcome to Our Catering Service</h1>
    <p className="text-md md:text-lg text-white mt-2">Delicious food for every occasion</p>
    <div className="m-2 space-y-2 md:space-x-3 md:space-y-0 flex flex-col md:flex-row justify-center items-center">
      <button className="px-2 py-1 md:px-6 md:py-2 lg:md:px-7 lg:py-3 bg-black text-white rounded hover:bg-blue-700 w-full md:w-auto text-sm md:text-base">Buy Now</button>
      <button className="px-2 py-1 md:px-6 lg:md:px-7 md:py-2 lg:py-3 bg-blue-500 text-white rounded hover:bg-blue-700 w-full md:w-auto text-sm md:text-base">Know More</button>
    </div>
  </div>
  )
}

export default HeroSection