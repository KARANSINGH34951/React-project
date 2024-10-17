import React, { useEffect } from 'react';
import "./Navbar.css";
import { gsap } from 'gsap';

const Navbar = () => {
  
  useEffect(() => {
    
    gsap.fromTo(".hero h1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.fromTo(".hero p", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.fromTo(".hero button", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 1, stagger: 0.2 });
  }, []);

  return (
    <>
      <div id='main'>
        
        <div className="bg-container bg-black">
          
          <nav className="bg-transparent p-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-e28d2fe026c8df7d1e4bf636c33d954c_screen.jpg?ts=1595420913"
                  className="h-8 md:h-10"
                  alt="Logo"
                />
                <span className="self-center text-xl md:text-2xl font-semibold text-white">Cater Service</span>
              </a>
              
              <ul className="hidden md:flex space-x-4 font-bold">
                <li><a href="#" className="text-white hover:text-blue-400">Home</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">About</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Services</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Event</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Menu</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Contact</a></li>
              </ul>

              <div className="md:hidden">
                <button className="text-white focus:outline-none" aria-label="Toggle Menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          <div className="hero text-center p-4 md:p-8">
            <h1 className=" font-bold text-white">Welcome to Our Catering Service</h1>
            <p className="text-base md:text-lg text-white mt-4">Delicious food for every occasion</p>
            <div className="m-2 space-y-2 md:space-x-3 md:space-y-0 flex flex-col md:flex-row justify-center items-center">
              <button className="px-6 py-2 bg-black text-white rounded hover:bg-blue-700 w-full md:w-auto">Buy Now</button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-full md:w-auto">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
