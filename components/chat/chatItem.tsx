"use client"
import Image from 'next/image'
import React from 'react'
import galochka from "@/assets/icons/register-man.svg"
import { Badge } from 'antd'
import Link from 'next/link'

const ChatItem = () => {

    return (
        <Link href={'/chat/1'} className='w-full flex gap-4 cursor-pointer hover:bg-white/10 active:bg-white/10 py-1 px-2 rounded-lg'>
            <div className='avatar'>
                <div className='w-14 h-14 bg-white rounded-full'></div>
            </div>
            <div className='flex gap-1 w-[calc(100%-72px)] justify-between items-start'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-end gap-1'>
                        <h2 className='text-base leading-[120%] font-medium font-jakarta'>Full Name</h2>
                        <Image src={galochka} width={15} height={15} alt='galochka icon' />
                    </div>
                    <span className='text-[#FF8CF0]'>Matches</span>
                </div>
                <div className='flex flex-col gap-2 items-end'>
                    <p className='text-xs leading-[120%] text-white/50'>16 mins</p>
                    <Badge count={4} style={{
                        background: "#FA42AA"
                    }} />
                </div>
            </div>
        </Link>
    )
}

export default ChatItem