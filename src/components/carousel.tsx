import React from 'react'
import banner1 from './BANNER1.png'
import banner2 from './BANNER2.png'
import banner3 from './BANNER3.png'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {


  return (
    <div className='z-0 shadow-lg'>
    <Carousel autoPlay={false} infiniteLoop showThumbs={false}>
      <div>
        <img src={banner1} className='relative'/>
        <div className='flex flex-col justify-evenly items-center gap-10 absolute text-white top-1/2 right-10 text-right w-1/2'><h1 className='sm:text-2xl text-sm'>Brand new items in the electronics section</h1>
        <button
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-400">Check out now</button></div>
      </div>
      <div>
        <img src={banner2}/>
      </div>
      <div>
        <img src={banner3}/>
      </div>
    </Carousel>
    </div>
  )
}

export default CarouselComponent