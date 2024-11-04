'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import './carrossel.css'

import { Swiper, SwiperSlide } from 'swiper/react'

const Carrossel = () => {
  const [carouselSize, setcarouselSize] = useState(3)

  const images = [
    { src: '/images/about/img2.png', id: 1 },
    { src: '/images/about/img3.png', id: 2 },
    { src: '/images/about/img4.png', id: 3 },

    { src: '/images/about/img2.png', id: 4 },
    { src: '/images/about/img3.png', id: 5 },
    { src: '/images/about/img4.png', id: 6 },
    { src: '/images/about/img2.png', id: 7 },
    { src: '/images/about/img3.png', id: 8 },
    { src: '/images/about/img4.png', id: 9 },
  ]


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720){
        setcarouselSize(3)
    }
      else if(window.innerWidth <= 640){
        setcarouselSize(1)
    }else{
        setcarouselSize(2)
        
    }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (


    <div className="flex w-full overflow-hidden relative">
      <Swiper
        className='w-full'
        slidesPerView={carouselSize}
        navigation
      >
        {images.map((bg) => (
          <SwiperSlide key={bg.id}>
            <Image src={bg.src} className=" w-full min-h-[300px] max-h-[300px] object-cover object-center" alt="backgroundSlider" width={1022} height={657} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;