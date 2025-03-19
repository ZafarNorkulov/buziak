"use client"
import Footer from "@/components/footer";
import bg from "@/assets/images/messages-screen-bg.png";
import Image from "next/image";
import Bell from "@/assets/icons/bell.svg"
import user from "@/assets/images/user.png"
import galochka from "@/assets/icons/galochka.svg"
import xIcon from "@/assets/icons/xicon.svg"
import thunder from "@/assets/icons/thunder.svg"
import heart from "@/assets/icons/heart-home.svg"
import weddingRingFill from "@/assets/icons/Wedding_Ring-fill.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules";
import PulseIcon from "@/components/pulse-icon";
import GradientButton from "@/components/buttons/gradient-button";

export default function Home() {
  return (
    <section className="home h-[calc(100vh-88px)] bg-top bg-no-repeat bg-cover pt-3" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="max-container !px-4">

        <div className="flex items-center justify-between">

          <div className="w-10 h-10"></div>
          <h1 className="text-lg leading-[30px] font-semibold text-white">Buziak</h1>
          <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full">
            <Image src={Bell} alt="Bell Icon" />
          </div>
        </div>


        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mt-8"
          initialSlide={1}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide className="relative">

            <div className="absolute top-5 left-5 z-30 rounded-4xl overflow-hidden">
              <div className="relative w-[66px] h-[30px] flex gap-1 items-center justify-center">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[4px]"></div>
                <PulseIcon />
                <span className="text-xs leading-[120%] font-medium text-white z-10">Online</span>
              </div>
            </div>


            <div className="absolute bottom-0 w-[342px] translate-x-1 z-10 rounded-4xl overflow-hidden">
              <Image src={user} className="object-cover" alt="" />
            </div>
            <div className="absolute h-1/2  w-[342px] flex flex-col justify-center gap-2 px-[19px]  translate-x-1 bottom-0 user-content z-20 rounded-4xl text-white">
              <span className="text-xs tracking-[1px] text-[#BABABA]">Warszawa</span>
              <GradientButton shadow icon={weddingRingFill}>
                Bez  zobowiązań
              </GradientButton>
              <div className="flex gap-2 items-end">
                <h2 className="text-2xl font-medium leading-[120%] font-jakarta">Mateusz, 25</h2>
                <Image src={galochka} width={25} height={25} alt="" />
              </div>
              <p className="text-sm leading-[120%] font-jakarta tracking-[0] text-white/70">Charyzmatyczny, pewny siebie i uwielbiający flirt. Jeśli lubisz napięcie i nutkę tajemnicy – pisz śmiało.</p>
            </div>

          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>

        <div className="w-max mx-auto flex gap-4 mt-4" >
          <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer" style={{
            background: "linear-gradient(160.84deg, #2E92FF 12.89%, #7D9FC4 83.44%)"
          }}>
            <Image src={xIcon} alt="xicon" />
          </div>
          <div className="w-16 h-15 flex items-center justify-center rounded-full cursor-pointer" style={{
            background: "linear-gradient(337.18deg, #FF63BB 4%, #8211C8 110.58%)"
          }}>
            <Image src={thunder} alt="thunder icon" />
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer" style={{
            background: "linear-gradient(166.45deg, #9652FF 9.71%, #BD95FA 94.97%)"
          }}>
            <Image src={heart} alt="heart icon" />
          </div>
        </div>
      </div>
      <Footer />
    </section>


  );
}
