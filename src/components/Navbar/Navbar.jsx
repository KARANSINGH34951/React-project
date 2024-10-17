import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import HeroSection from './HeroSection';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(".hero h1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.fromTo(".hero p", { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.fromTo(".hero button", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 1, stagger: 0.2 });
  }, []);

  return (
    <div id="main" className="overflow-x-hidden overflow-y-hidden">
      <div
        className="bg-black bg-cover bg-center bg-no-repeat h-screen w-full opacity-90"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1546039/pexels-photo-1546039.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
      >
        
        <nav className="bg-transparent p-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-e28d2fe026c8df7d1e4bf636c33d954c_screen.jpg?ts=1595420913"
                className="h-6 md:h-10 lg:h-12 xl:h-16 rounded-md"
                alt="Logo"
              />
              <span className="self-center text-sm text-1xl md:text-2xl lg:text-2xl xl:text-4xl font-semibold text-white">Cater Service</span>
            </a>

            
            <div className="md:hidden">
              <button 
                className="text-white focus:outline-none" 
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            
            <ul className={`hidden md:flex space-x-4 font-bold ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
              <li><a href="#" className="text-white hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">About</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Services</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Event</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Menu</a></li>
              <li><a href="#" className="text-white hover:text-blue-400">Contact</a></li>
            </ul>

           
            {isMobileMenuOpen && (
              <ul className="absolute top-16 left-0 w-full bg-black md:hidden flex flex-col space-y-2 p-4 z-10 opacity-90">
                <li><a href="#" className="text-white hover:text-blue-400">Home</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">About</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Services</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Event</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Menu</a></li>
                <li><a href="#" className="text-white hover:text-blue-400">Contact</a></li>
              </ul>
            )}
          </div>
        </nav>

            <HeroSection/>
       
      </div>
    </div>
  );
};

export default Navbar;
