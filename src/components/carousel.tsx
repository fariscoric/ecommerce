import React from 'react'
import banner1 from './BANNER1.png'
import banner2 from './BANNER2.png'
import banner3 from './BANNER3.png'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselComponent = () => {

  const slides = [
    { img: banner1, caption: 'Slide 1' },
    { img: banner2, caption: 'Slide 2' },
    { img: banner3, caption: 'Slide 3' },
  ];

  return (
    <div className='z-0 shadow-lg'>
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.img} alt={slide.caption} />
          <p className="legend">{slide.caption}</p>
        </div>
      ))}
    </Carousel>
    </div>
  )
}

export default CarouselComponent