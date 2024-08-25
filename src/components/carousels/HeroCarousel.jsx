'use client'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import img1 from '@/images/img1.jpg'
import img2 from '@/images/img2.jpg'
import img3 from '@/images/img3.jpg'
import img4 from '@/images/img4.jpg'
import img5 from '@/images/img5.jpg'
import img6 from '@/images/img6.jpg'
import img7 from '@/images/img7.jpg'
import img8 from '@/images/img8.jpg'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 1
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 1
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 1
  },
  mobile: {
    breakpoint: {max: 466, min: 0},
    items: 1
  }
}

export default function HeroCarousel() {
  return (
   <>
    <Carousel 
      className="w-full h-[30rem]"
      responsive={responsive} 
      draggable={true} 
      showDots={true} 
      infinite={true} 
      autoPlay={true} 
      autoPlaySpeed={1000} 
      keyBoardControl={true} 
      customTransition="all .5" 
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
    >
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img1} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img2} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img3} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img4} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img5} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img6} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img7} alt=""/></div>
        <div className="relative h-[30rem]"><Image fill className="object-cover rounded-3xl" src={img8} alt=""/></div>
    </Carousel>
   </>
  )
}
