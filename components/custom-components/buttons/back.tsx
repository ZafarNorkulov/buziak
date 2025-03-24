"use client"
import React from 'react'
import backArrow from "@/assets/icons/arrow-left.svg"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const router = useRouter()
    return (
        <button className='w-[52px] h-[52px] p-[14px] bg-[#FF63BBB8] rounded-full' onClick={() => router.back()}>
            <Image src={backArrow} width={24} height={24} alt='arrow' />
        </button>
    )
}

export default BackButton