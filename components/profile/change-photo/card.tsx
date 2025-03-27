import React from 'react'
import plusIcon from "@/assets/icons/plus.svg"
import Image from 'next/image'

const PhotoCard = () => {
    return (
        <div className='col-span-4 relative h-[143px] bg-[#675B78] rounded-4xl overflow-hidden'>

            {/* Icon */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-[22px] h-[22px] border-[3px] border-white rounded-full bg-pink z-20'>


                <label htmlFor="file" className='flex justify-center'>
                    <input type="file" name="file" id="file" className='hidden' />
                    <Image src={plusIcon} className='' width={11} height={11} alt='icon' />
                </label>


            </div>


        </div>
    )
}

export default PhotoCard