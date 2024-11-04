'use client'
import React from 'react'
import Image from "next/image";
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'

const homepageCarousel = () => {
    const data = [
        { id: 1, image: '/images/homepage/1.jpg' },
        { id: 2, image: '/images/action/ImgBG1.jpg' },
        { id: 3, image: '/images/action/ImgBG3.jpg' },
    ]
    return (
        <div>

        </div>
    )
}

export default homepageCarousel