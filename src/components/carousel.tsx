import React from 'react'
import banner1 from './BANNER1.png'
import banner2 from './BANNER2.png'
import banner3 from './BANNER3.png'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom'
import { PageContext } from '../context/context';
import { useContext } from 'react';


const CarouselComponent = () => {
const navigate = useNavigate();
const {activePage, setActivePage} = useContext(PageContext)

  return (
    <div className='z-0 shadow-lg'>
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className='flex flex-col justify-center items-center'>
        <img src={banner1} className='relative flex flex-row justify-center'/>
        <div className='flex flex-col justify-evenly items-center gap-5 absolute text-white mr-1 right-0 text-center w-1/2'><h1 className='sm:text-3xl text-sm'>Brand new items in the electronics section</h1>
        <button onClick={() => {
          setActivePage('electronics')
          navigate('/category')}}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-400">Check out now</button></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={banner3} className='relative flex flex-row justify-center'/>
        <div className='flex flex-col justify-evenly items-center gap-5 absolute text-white sm:ml-5 ml-1 left-0 text-center w-1/2'><h1 className='sm:text-3xl text-sm text-white'>Ongoing sale on seasonal items in the women's section</h1>
        <button onClick={() => {
          setActivePage(`women's clothing`)
          navigate('/category')}}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-400">Check out now</button></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={banner2} className='relative flex flex-row justify-center'/>
        <div className='flex flex-col justify-evenly items-center gap-5 absolute text-white sm:mr-5 mr-1 right-0 text-center w-1/2'><h1 className='sm:text-3xl text-sm'>Look sleek and fashionable with our new men's clothing designs</h1>
        <button onClick={() => {
          setActivePage(`men's clothing`)
          navigate('/category')}}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-400">Check out now</button></div>
      </div>
    </Carousel>
    </div>
  )
}

export default CarouselComponent