import React from 'react';
import banner from '../../assets/banner.jpg';

function HeroSection() {
  return (
    <div className='relative'>
      <div>
        <img 
          src={banner} 
          alt="Banner" 
          className='w-full object-cover object-center'
        />
      </div>
      <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center px-4 sm:top-1/3 md:top-1/4 lg:top-1/3'>
        <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600'>
        Explore New Horizons!
        </h1>
        <p className='text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold text-white'>
        Discover Our Latest Trends & Define Your Fashion
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
