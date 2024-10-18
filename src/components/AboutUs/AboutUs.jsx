import React from 'react';
import 'animate.css';  // Import animate.css
import Counter from './Counter';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

const AboutUs = () => {
  return (
    <div className='text-[#C9E9D2] m-4 md:m-10 animate__animated animate__bounce animate__delay-2s'>
      <h1 className='text-center mb-4 text-2xl md:text-4xl lg:text-5xl xl:text-5xl'>
        <span className='text-blue-700'>About</span> us
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        
      <ScrollAnimation animateIn="fadeIn">
          <div className='flex justify-center about-img items-center animate__animated animate__fadeInUp'>
            <img 
              className='rounded-lg w-full max-w-xs' 
              src="https://th.bing.com/th/id/OIP.VdKxl6Y6QCIHVY55rQ6sYwHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
              alt="About Us" 
            />
          </div>
        </ScrollAnimation>

        {/* Text Section with animate.css */}
        <div className='flex justify-center items-center animate__animated animate__bounce'>
          <h2 className='text-center p-4 md:p-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo hic aspernatur est illo harum accusantium minima, rerum sequi saepe tempora eaque libero aliquid eum optio ducimus placeat ratione repellendus illum! Officiis alias autem natus, accusamus nam architecto illo iusto pariatur id exercitationem perferendis veritatis voluptatibus quia hic necessitatibus, animi, magnam ut ipsa voluptatem nihil recusandae aut reprehenderit! Nesciunt, natus laboriosam, optio voluptates iste pariatur a voluptate sunt culpa quam voluptatum at ad consequuntur cum?
          </h2>
        </div>
      </div>

      <Counter />
    </div>
  );
};

export default AboutUs;
