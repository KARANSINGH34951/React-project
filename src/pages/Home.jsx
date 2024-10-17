import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutUs from '../components/AboutUs/AboutUs';
import OurService from '../components/OurService/OurService';
import OurTeam from '../components/Team/OurTeam';
import NearBy from '../components/NearBy/NearBy';

const Home = () => {
  return (
    <div className='text-black bg-[#FEF9F2] overflow-x-hidden'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <AboutUs />
        <OurService />
        <OurTeam />
        <NearBy/>
      </div>
    </div>
  );
};

export default Home;
