import React from 'react'
import Counter from './Counter'

const AboutUs = () => {
  return (
   <div className='text-black m-10' >
    <h1 className='text-center text-3xl'><span className='text-blue-700'>About</span> us</h1>
     <div className=' grid grid-cols-2 gap-4    p-4'>
      <div className='col-span-1 flex justify-center items-center '>
        <img className='rounded-lg' src="https://th.bing.com/th/id/OIP.VdKxl6Y6QCIHVY55rQ6sYwHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="img" />
      </div>

      <div className='col-span-1 flex justify-center items-center'>
        

        <h2 className=' bottom-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo hic aspernatur est illo harum accusantium minima, rerum sequi saepe tempora eaque libero aliquid eum optio ducimus placeat ratione repellendus illum! Officiis alias autem natus, accusamus nam architecto illo iusto pariatur id exercitationem perferendis veritatis voluptatibus quia hic necessitatibus, animi, magnam ut ipsa voluptatem nihil recusandae aut reprehenderit! Nesciunt, natus laboriosam, optio voluptates iste pariatur a voluptate sunt culpa quam voluptatum at ad consequuntur cum?</h2>
      </div>
    </div>

    <Counter/>
    <div className='w-full'>
  <iframe
    width="555"
    height="415"
    src="https://www.youtube.com/embed/HS24PywYlxg?si=GLxbcP1nFr9KYPyO&autoplay=1&controls=0&modestbranding=1"
    
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  >
  </iframe>
</div>



 
   </div>
  )
}

export default AboutUs