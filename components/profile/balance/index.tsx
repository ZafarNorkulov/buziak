import React from 'react'
import tokenIcon from "@/assets/icons/token.svg"
import Image from 'next/image'
import BalanceCard from './card'

const Balance = () => {
    return (
        <div className='h-[calc(100%-88px)] flex flex-col justify-between '>
            <div className='flex flex-col items-center gap-6'>

                <div className='flex gap-1 px-2 py-[11px] rounded-[48px] bg-white/10'>
                    <Image src={tokenIcon} alt='token' />
                    <span className='text-[15px] leading-[120%] font-medium text-shadow font-jakarta'>999</span>
                </div>
                <div className='flex flex-col gap-y-[18px]'>
                    <BalanceCard count={100} price={9.90} />
                    <BalanceCard count={300} price={25.90} />
                    <BalanceCard count={500} price={39.90} />

                </div>
            </div>
            <p className='text-white/60 text-xs leading-[150%] -tracking-[3%] text-center'>
                Tortor vulputate sit faucibus gravida pellentesque nisl, est ornare. Vulputate eget nec massa fermentum. Pellentesque vulputate enim massa non donec. Sed nullam auctor nullam at egestas donec dui, amet.
            </p>
        </div>
    )
}

export default Balance