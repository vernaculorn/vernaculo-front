'use client'
import React from 'react'
import Image from "next/image";
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/pagination'
import './carousel.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SVGBorder2 from '@/app/icons/SVGBorder2';
import SVGBorder1 from '@/app/icons/SVGBorder1';

const HomepageCarousel = () => {
    const data = [
        { id: 1, image: '/images/homepage/1.jpg' },
        { id: 2, image: '/images/action/ImgBG1.png' },
        { id: 3, image: '/images/action/ImgBG3.png' },
    ]
    return (
        <div className="w-full h-full">
            <div className="relative flex flex-col w-full h-[1000px] max-h-[1000px] overflow-hidden">

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
                                <Image src={bg.image} className=" w-full min-h-[1000px] max-h-[1000px] object-cover object-center" alt="backgroundSlider" width={1022} height={657} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="">
                        <SVGBorder2 className="pointer-events-none absolute w-full z-20 bottom-2 md:bottom-[-2rem] lg:bottom-[-8rem] fill-current text-carrossel" />
                    </div>
                    <div className="">
                        <SVGBorder1 className=" pointer-events-none absolute bottom-0 z-20 w-full mt-10 fill-current text-white" />
                    </div>
                </div>
                {/*||||||||||||||||||||*/}
            </div>
        </div >
    )
}

export default HomepageCarousel