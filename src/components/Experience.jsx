import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Experience
          </p>
          <p className='py-6 text-2xl'>Here are some projects I've done </p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${proj1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
              Practicum Project at Robertson
              </span>
              <p className='text-center'>Created a Website With User Registration Functionality and Login</p>
              <div className='pt-8 text-center'>
              </div>
            </div>
          </div>
          <div
            
            style={{ backgroundImage: `url(${proj2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Practicum Project at Robertson
              </span>
              <p className='text-center'>Made this portfolio website and deployed it using GitHub Pages</p>
              <div className='pt-8 text-center'>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;