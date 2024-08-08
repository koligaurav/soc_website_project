import React, { useEffect, useState } from 'react';
import list from "../../public/list.json"; // Ensure the path is correct
import Cards from './Cards'; // Import Cards component if it exists
import { Link } from 'react-router-dom';

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log(list); // Check what is being imported
    if (list.courses) {
      setCourses(list.courses);
    }
  }, []);

  if (!Array.isArray(courses)) {
    return <div>Error: Data is not an array</div>;
  }

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-300'>Here! :)</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis eos excepturi odio, numquam possimus quibusdam dolores eaque hic nobis. Perferendis numquam deleniti laborum nulla corrupti quibusdam eos aut repellat.</p>
          <Link to='/'>
            <button className='m-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>  
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {
            courses.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
