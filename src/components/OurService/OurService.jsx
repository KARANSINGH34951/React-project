import React from 'react';
import ServiceCard from './ServiceCard';
import img from "../OurService/Cards-img/pizza.png"

const OurService = () => {
  const services = [
    { heading: "Corporate Catering", description: "Customizable catering solutions for business events.", img: img },
    { heading: "Event Planning", description: "Full-service planning for any occasion.", img },
    { heading: "Food Delivery", description: "Fast and convenient delivery from our kitchen to your door.", img },
    { heading: "Personal Chef", description: "Tailored meal experiences prepared by your own chef.", img },
    { heading: "Wedding Catering", description: "Elegant catering tailored to make your wedding unforgettable.", img },
    { heading: "Buffet Services", description: "Diverse buffet options for large gatherings.", img },
    { heading: "Private Parties", description: "Exclusive catering for intimate and private events.", img },
    { heading: "Gourmet Meal Prep", description: "Healthy and delicious meal prep for your busy lifestyle.", img },
  ];

  return (
    <div className='py-10 rounded-lg px-6'>
      <h1 className='text-center text-4xl font-bold mb-4'>Our Services</h1>
      <h2 className='text-center text-2xl font-medium text-gray-700 mb-10'>What We Offer?</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 -z-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            heading={service.heading} 
            description={service.description} 
            img={service.img} 
          />
        ))}
      </div>
    </div>
  );
};

export default OurService;
