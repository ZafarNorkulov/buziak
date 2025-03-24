"use client"
import React, { useState } from 'react'
import tokenIcon from "@/assets/icons/token.svg"
import Image from 'next/image'
import avatar from "@/assets/images/Avatar.png"
import settings from "@/assets/icons/settings.svg"
import Bell from "@/assets/icons/bell.svg"
import GradientButton from '../custom-components/buttons/gradient-button'
import heartIcon from "@/assets/icons/heart.svg"
import editIcon from "@/assets/icons/edit.svg"
import unregister from "@/assets/icons/unregister-user.svg"
import Link from 'next/link'
import InfoModal from './infoModal'


const ProfileComponent = () => {
    const [open, setOpen] = useState(false)


    return (
        <section className='flex flex-col gap-5'>
            <div className='max-container flex flex-col gap-2 !px-[18px]'>
                <div className='flex items-start justify-between '>

                    <div className='w-max flex gap-1 bg-white/10 px-2 py-3 rounded-full'>
                        <Image src={tokenIcon} alt='token' />
                        <p className='text-base leading-[120%] font-medium font-jakarta text-shadow'>999</p>
                    </div>
                    <div className='relative mt-6'>
                        <Image src={avatar} width={160} height={160} alt='avatar' />
                        <Link href={"/profile/settings"} className='absolute top-4 -right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#42152d]'>

                            <Image src={settings} width={20} height={20} alt='settings' />
                        </Link>
                    </div>
                    <Link href={"/posts/notifications"} className='w-10 h-10 flex items-center justify-center bg-white/10 px-2 py-3 rounded-full'>
                        <Image src={Bell} alt='ringbell' />

                    </Link>
                </div>

                <div className='flex items-center justify-between mx-6 '>
                    <div>
                        <p className='text-xs tracking-[1px] text-gray'>Warszawa</p>
                    </div>
                    <div className='relative z-20 flex gap-2 -translate-x-1/4'>
                        <GradientButton className='flex gap-1 h-[26px]' onClick={() => setOpen(true)}>
                            <Image src={heartIcon} alt='heart' width={10} height={10} />
                            <p className='text-[8px] leading-[120%] font-semibold font-jakarta'>Ресторан</p>
                        </GradientButton>
                        <Image src={editIcon} width={15} height={15} alt='edit' />

                    </div>
                    <div></div>
                </div>
                <div className='flex items-center gap-1.5 w-max mx-auto translate-x-1/6 '>
                    <h3 className='text-xl leading-[120%] font-medium font-jakarta'>Alisa, 25</h3>
                    <Image src={unregister} width={25} height={25} alt='galochka' />
                </div>

                <div className='w-full px-6 py-2 rounded-4xl relative bg-[#675B78]'>
                    <p className='text-sm leading-[120%] font-jakarta text-white70 text-shadow'>
                        Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле.
                    </p>
                    <Image src={editIcon} width={15} height={15} className='absolute right-4 bottom-4' alt='edit' />
                </div>
            </div>
                <InfoModal open={open} setOpen={setOpen} />

        </section>
    )
}

export default ProfileComponent