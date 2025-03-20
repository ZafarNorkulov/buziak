"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import Arrow from "@/assets/icons/arrow-left.svg"
import Image from 'next/image';
import SwiperCard from './card';
import user from "@/assets/images/user.png"



const SwiperSection = () => {


    const swiperRef = useRef<SwiperType>(null)


    return (
        <div className='relative '>

            <Swiper
                cssMode={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop

                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper">
                <div onClick={() => swiperRef.current?.slidePrev()} className="absolute top-[10px] left-[10px] z-10 w-[52px] h-[52px] flex items-center justify-center cursor-pointer  bg-[#FF63BBB8] p-2 rounded-full">
                    <Image src={Arrow} alt='Arrow left icon' />
                </div>
                <SwiperSlide>
                    <SwiperCard img={user} />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard img={user} />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard img={user} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperSection