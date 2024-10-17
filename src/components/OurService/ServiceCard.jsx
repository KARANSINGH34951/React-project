import React from 'react';
import img from "./Cards-img/pizza.png";

const ServiceCard = ({heading,description}) => {
  return (
    <div className='text-center p-6 my-6 flex flex-col justify-center items-center h-auto w-80 hover:bg-blue-800 transition transform  duration-300  hover:scale-110'>
      <img className='h-24 w-24 object-cover' src={img} alt="Pizza" />
      <h4 className='my-2 text-2xl font-semibold'>{heading}</h4>
      <h6 className='text-sm text-gray-600'>{description}</h6>
    </div>
  );
};

export default ServiceCard;
