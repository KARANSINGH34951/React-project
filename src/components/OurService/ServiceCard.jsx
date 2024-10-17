import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ heading, description, img }) => {
  return (
    <div className='text-center p-6 my-6 flex flex-col justify-center items-center h-auto w-full max-w-xs hover:bg-blue-800 transition transform duration-300 hover:scale-105'>
      <img className='h-24 w-24 object-cover mb-4' src={img} alt={`${heading} illustration`} />
      <h4 className='my-2 text-2xl font-semibold'>{heading}</h4>
      <h6 className='text-sm text-gray-600'>{description}</h6>
    </div>
  );
};

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServiceCard;
