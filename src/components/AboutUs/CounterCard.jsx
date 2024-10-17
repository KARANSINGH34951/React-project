// CounterCard.js
import React from 'react';
import CountUp from 'react-countup';

const CounterCard = ({ start, end, duration, label, counter }) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg text-center h-60'>
      <h2 className='font-bold text-4xl'>
        {counter && <CountUp start={start} end={end} duration={duration} />}+
      </h2>
      <p className='py-2 text-sm sm:text-lg md:text-xl lg:text-2xl'>{label}</p>
    </div>
  );
};

export default CounterCard;
