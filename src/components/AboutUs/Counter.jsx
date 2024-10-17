import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Counter.css'

const Counter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <div className='px-4 py-8 md:px-10 md:py-12'>
  <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
    <div className='flex flex-wrap justify-around items-center text-center w-full box-border'>
      
      <div className='m-4 w-full sm:w-auto'>
        <h2 className='font-bold'>
          {counter && <CountUp start={0} end={10000} duration={4} />}+
        </h2>
        <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Happy customers</p>
      </div>

      <div className='m-4 w-full sm:w-auto'>
        <h2 className='font-bold'>
          {counter && <CountUp start={0} end={500} duration={4} />}+
        </h2>
        <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Partners</p>
      </div>

      <div className='m-4 w-full sm:w-auto'>
        <h2 className=' font-bold'>
          {counter && <CountUp start={0} end={765} duration={4} />}+
        </h2>
        <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Event Completed</p>
      </div>

      <div className='m-4 w-full sm:w-auto'>
        <h2 className='font-bold'>
          {counter && <CountUp start={0} end={22} duration={6} />}+
        </h2>
        <p className='py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl'>State Access</p>
      </div>

    </div>
  </ScrollTrigger>
</div>

  );
}

export default Counter;
