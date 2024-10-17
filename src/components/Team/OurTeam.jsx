import React from 'react';
import img from "../Navbar/navbarimg/OIP.jpeg"
import UserCard from './UserCard';
UserCard

const OurTeam = () => {
  return (
    <div >
      <div className='py-4'>
        <h1 className='text-center'>Our Team</h1>   
      </div>

      <div className='px-4 sm:px-8 md:px-12 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-6 gap-6 text-center my-6 '>
        <UserCard username="karan singh" img={img}  />
        <UserCard username="Rahul" img={img}  />
        <UserCard username="jeeeva" img={img}  />
        <UserCard username="ravi" img={img} />
      </div>
    </div>
  );
};

export default OurTeam;
