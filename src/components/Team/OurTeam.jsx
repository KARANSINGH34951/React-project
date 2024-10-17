import React from 'react';
import img from "../Navbar/navbarimg/OIP.jpeg";
import UserCard from './UserCard';

const OurTeam = () => {
  return (
    <div>
      <div className='py-4'>
        <h1 className='text-center text-2xl md:text-3xl font-bold'>Our Team</h1>
      </div>

      <div className='px-4 sm:px-8 md:px-12 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center my-6'>
        <UserCard username="karan singh" img={img} />
        <UserCard username="Rahul" img={img} />
        <UserCard username="jeeeva" img={img} />
        <UserCard username="ravi" img={img} />
      </div>

      {/* <div className='w-full mt-4'>
        <iframe
          className='w-full h-64 md:h-96'
          src="https://www.youtube.com/embed/HS24PywYlxg?si=GLxbcP1nFr9KYPyO&autoplay=1&controls=0&modestbranding=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
      </div> */}
    </div>
  );
};

export default OurTeam;
