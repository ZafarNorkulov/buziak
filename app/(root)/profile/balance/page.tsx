import BackButton from '@/components/custom-components/buttons/back'
import Balance from '@/components/profile/balance'
import React from 'react'

const page = () => {
    return (
        <div className='h-[calc(100vh-88px)] px-[18px]'>
            <div className='w-full flex justify-between items-center mb-5'>
                <BackButton />
                <h3 className='text-[32px] leading-[120%] font-medium font-jakarta'>Твой баланс</h3>
                <div></div>
            </div>
            <Balance />
        </div>
    )
}

export default page