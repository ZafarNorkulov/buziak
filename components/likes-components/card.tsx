import React from 'react'
import GradientButton from '@/components/buttons/gradient-button';
import Image, { StaticImageData } from 'next/image';
import HeartIcon from "@/assets/icons/heart.svg"
import galochka from "@/assets/icons/galochka.svg"
import Link from 'next/link';


interface LikedCardProps {
    style: React.CSSProperties;
    img: StaticImageData;
    url: string
}

const LikedCard: React.FC<LikedCardProps> = ({ style, img, url }) => {
    return (
        <Link href={url} className='w-[calc(50%-5px)] relative mb-4 rounded-4xl overflow-hidden' style={style}>
            <Image src={img} className='w-full h-full object-cover' alt='' />


            <div className="overlay absolute inset-0 z-10" style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 60.62%, #000000 100%)"
            }}>
            </div>

            <div className="absolute top-3 right-3 " >

                <GradientButton icon={HeartIcon}>90% match</GradientButton>
            </div>
            <div className="content absolute left-3 bottom-[10px] flex flex-col z-20 font-jakarta leading-[120%]">
                <div className='flex gap-1 items-end'>

                    <h2 className='text-sm  font-medium text-white'>Full Name, 25</h2>
                    <Image src={galochka} width={15} height={15} className='object-cover' alt='galochka' />
                </div>
                <span className='text-xs text-white70'>Warszawa</span>
            </div>



        </Link>
    )
}

export default LikedCard