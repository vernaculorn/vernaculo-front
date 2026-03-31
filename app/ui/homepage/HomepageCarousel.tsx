'use client'
import React from 'react'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SVGBorder from '@/app/icons/SVGBorder'

const HomepageCarousel = () => {
    const data = [
        { id: 1, image: '/images/homepage/1.jpg', title: 'TRABALHO COM COURO - ZONA DO SERTÃO' },
        { id: 2, image: '/images/action/ImgBG1.png', title: 'TRABALHO COM COURO - ZONA DO SERTÃO' },
        { id: 3, image: '/images/action/ImgBG3.png', title: 'TRABALHO COM COURO - ZONA DO SERTÃO' },
    ]
    return (
        <div className="w-full h-full">
            <div className="relative flex flex-col w-full overflow-hidden">

                {/* CARROSSEL HOME PAGE */}
                <div className="relative">
                    <Swiper
                        className=''
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {data.map((bg) => (
                            <SwiperSlide key={bg.id}>
                                <div style={{backgroundImage: `url(${bg.image})`}} className='w-full h-screen bg-cover bg-center relative'>
                                    <div className="absolute bottom-[200px] md:bottom-[200px] lg:bottom-[400px] right-10 text-white font-bold text-3xl">
                                        {bg.title}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="">
                        <SVGBorder className=" pointer-events-none absolute bottom-0 z-20 w-full mt-10 fill-current text-white" />
                        <SVGBorder className=" pointer-events-none absolute bottom-0 z-20 w-full mt-10 fill-current text-white" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomepageCarousel