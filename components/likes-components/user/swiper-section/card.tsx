import React from 'react'
import Image, { StaticImageData } from 'next/image'




const SwiperCard = ({ img }: { img: StaticImageData }) => {
    return (
        <div className='w-full h-full rounded-[10px] overflow-hidden relative'>
            <Image src={img} className='w-full h-full object-cover' alt='' />

            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.62%, #000000 100%)" }}>

            </div>
        </div>
    )
}

export default SwiperCard

