// Counter.js
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CounterCard from './CounterCard';
import './Counter.css';

const Counter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <div className='px-4 py-8 md:px-10 md:py-12'>
      <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
       
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          <CounterCard start={0} end={10000} duration={4} label="Happy Customers" counter={counter} />
          <CounterCard start={0} end={500} duration={4} label="Partners" counter={counter} />
          <CounterCard start={0} end={765} duration={4} label="Events Completed" counter={counter} />
          <CounterCard start={0} end={22} duration={6} label="States Access" counter={counter} />
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
