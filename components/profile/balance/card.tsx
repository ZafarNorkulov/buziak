import React from 'react'
import Image from 'next/image'
import tokenIcon from "@/assets/icons/token.svg"

interface ICardProps {
    count: number,
    price: number
}

const BalanceCard = ({ count, price }: ICardProps) => {
    return (
        <div className='w-[280px] h-10 rounded-[40px] pl-[27px] pr-[14px] flex items-center gap-3 button-gradient button-shadow'>
            <h3 className='text-base leading-[120%] font-semibold font-jakarta text-[#F1EAEF]'>Купить </h3>
            <div className='flex w-full justify-between pl-3'>

                <div className='flex items-center gap-3'>
                    <Image src={tokenIcon} width={27} height={19} className='shadow-drop' alt='token' />
                    <p className='text-[15px] leading-[120%] font-medium font-jakarta shadow-drop'>{count}</p>
                </div>
                <h2 className='text-xl leading-[120%] font-semibold font-jakarta text-[#F1EAEF]'>{price.toFixed(2)}zl</h2>
            </div>
        </div>
    )
}

export default BalanceCard