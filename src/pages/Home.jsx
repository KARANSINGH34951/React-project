import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutUs from '../components/AboutUs/AboutUs'
import OurService from '../components/OurService/OurService'
import OurTeam from '../components/Team/OurTeam'
import NearBy from '../components/Navbar/NearBy/NearBy'


const Home = () => {
  return (
    <div className='text-black bg-gray-100'>
      <Navbar/>
      <AboutUs/>
      <OurService/>
      <OurTeam/>
      <NearBy/>
    </div>
  )
}

export default Home