import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div id='main'>
        {/* Background container for both Navbar and Hero */}
        <div className="bg-container bg-black">
          {/* Navbar */}
          <nav className="bg-transparent p-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-e28d2fe026c8df7d1e4bf636c33d954c_screen.jpg?ts=1595420913"
                  className="h-8"
                  alt="Logo"
                />
                <span className="self-center text-2xl font-semibold text-white">Cater Service</span>
              </a>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white">Home</a></li>
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Event</a></li>
                <li><a href="#" className="text-white">Menu</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
              </ul>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="hero">
            <h1 className="text-5xl font-bold text-white">Welcome to Our Catering Service</h1>
            <p className="text-lg text-white mt-4">Delicious food for every occasion</p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
