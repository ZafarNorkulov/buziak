import React from 'react'
import Image, { StaticImageData } from 'next/image'
import GradientButton from '@/components/buttons/gradient-button'
import HeratIcon from "@/assets/icons/heart.svg"
import Likeicon from "@/assets/icons/heart-home.svg"
import galochka from "@/assets/icons/galochka.svg"
import chatIcon2 from "@/assets/icons/chaticon-2.svg"
import iconBg from "@/assets/images/icon-bg.png"


const SwiperCard = ({ img }: { img: StaticImageData }) => {
    return (
        <div className='w-full h-full rounded-[10px] overflow-hidden relative'>
            <Image src={img} className='w-full h-full object-cover' alt='' />

            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.62%, #000000 100%)" }}>

            </div>

            <div className="absolute top-[7px] right-[6px] z-20">
                <GradientButton icon={HeratIcon}>Ресторан</GradientButton>
            </div>

            <div className="content absolute bottom-2 left-2 right-2 flex flex-col gap-1 z-30 text-white">
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <span className='text-white70 text-xs tracking-[1px]'>Warszawa</span>
                        <div className='flex items-end gap-1'>
                            <h2 className='text-sm leading-[120%] font-jakarta font-medium'>Full Name, 25</h2>
                            <Image src={galochka} width={15} height={15} alt='' />
                        </div>
                    </div>

                    <div className='flex items-center gap-2.5'>
                        <div className='w-14 h-14 relative flex items-center justify-center rounded-full' >

                            <Image src={iconBg} className='absolute inset-0' alt='like' />
                            <Image src={Likeicon} className='w-6 h-6' alt='like' />
                        </div>
                        <div className='w-14 h-14 relative flex items-center justify-center rounded-full' >

                            <Image src={iconBg} className='absolute inset-0' alt='like' />
                            <Image src={chatIcon2} className='w-6 h-6' alt='like' />
                        </div>
                    </div>
                </div>
                <div className='w-full px-1.5' style={{
                    boxShadow: "0px 4px 4px 0px #00000040"
                }}>
                    <p className='text-sm leading-[120%] text-center tracking-[0]  font-jakarta text-white70'>Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. </p>
                </div>
            </div>
        </div>
    )
}

export default SwiperCard

