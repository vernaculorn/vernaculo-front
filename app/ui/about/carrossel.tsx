'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'

type CarrosselProps = {
  images: { src: string, id: number }[]
}

const Carrossel = ({ images }: CarrosselProps) => {
  const [carouselSize, setcarouselSize] = useState(3)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) setcarouselSize(1)
      else setcarouselSize(3)
    }
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="flex w-full overflow-hidden relative">
      {/* CARROSSEL */}
      <Swiper
        className='w-full'
        slidesPerView={carouselSize}
        navigation
      >
        {images.map((bg) => (
          <SwiperSlide key={bg.id}>
            <Image 
              src={bg.src} 
              className=" w-full min-h-[200px] max-h-[200px] md:min-h-[300px] md:max-h-[300px] lg:min-h-[400px] lg:max-h-[400px]  object-cover object-center" 
              alt="backgroundSlider" 
              width={1022} 
              height={657} 
              unoptimized 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
