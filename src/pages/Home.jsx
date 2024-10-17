import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AboutUs from '../components/AboutUs/AboutUs'
import OurService from '../components/OurService/OurService'


const Home = () => {
  return (
    <div className='text-black'>
      <Navbar/>
      <AboutUs/>
      <OurService/>
    </div>
  )
}

export default Home