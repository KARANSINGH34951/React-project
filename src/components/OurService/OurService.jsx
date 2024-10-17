import React from 'react';
import ServiceCard from './ServiceCard';

const OurService = () => {
  return (
    <div className='py-10 bg-gray-100 rounded-lg px-6'>
      <h1 className='text-center text-4xl font-bold mb-4'>Our Services</h1>
      <h2 className='text-center text-2xl font-medium text-gray-700 mb-10'>What We Offer?</h2>
      
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4 md:px-10'>

        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4 md:px-10'>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        <ServiceCard heading={"Corporate Catering"} description={"Contrary to popular belief, ipsum is not simply random."}/>
        
      </div>
    </div>
  );
};

export default OurService;
