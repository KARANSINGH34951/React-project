import React, { useEffect } from 'react';
import Counter from './Counter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);  
const AboutUs = () => {
  useEffect(() => {
   
    const animation = gsap.fromTo(
      '.about-img', 
      { opacity: 0, y: -50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-img', 
          start: 'top 80%', 
          toggleActions: 'play none none reverse', 
        }
      }
    );

    
    return () => {
      animation.scrollTrigger.kill();
    };
  }, []); 

  return (
    <div className='text-[#C9E9D2] m-4 md:m-10'>
      <h1 className='text-center mb-4 text-2xl md:text-4xl lg:text-5xl xl:text-5xl'>
        <span className='text-blue-700'>About</span> us
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        <div className='flex justify-center about-img items-center'>
          <img 
            className='rounded-lg w-full max-w-xs' 
            src="https://th.bing.com/th/id/OIP.VdKxl6Y6QCIHVY55rQ6sYwHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
            alt="About Us" 
          />
        </div>
        <div className='flex justify-center items-center'>
          <h2 className='text-center p-4 md:p-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo hic aspernatur est illo harum accusantium minima, rerum sequi saepe tempora eaque libero aliquid eum optio ducimus placeat ratione repellendus illum! Officiis alias autem natus, accusamus nam architecto illo iusto pariatur id exercitationem perferendis veritatis voluptatibus quia hic necessitatibus, animi, magnam ut ipsa voluptatem nihil recusandae aut reprehenderit! Nesciunt, natus laboriosam, optio voluptates iste pariatur a voluptate sunt culpa quam voluptatum at ad consequuntur cum?
          </h2>
        </div>
      </div>

      <Counter />
    </div>
  );
}

export default AboutUs;
