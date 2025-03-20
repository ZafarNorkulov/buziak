import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const GradientButton = ({ children, icon, shadow, className = "" }: { children: React.ReactNode, icon?: StaticImageData, shadow?: boolean, className?: string }) => {
    return (
        <button className={twMerge(`w-max h-[26px] p-2 rounded-4xl flex items-center gap-1 button-gradient ${shadow && 'shadow-button'} font-bold text-[#F1EAEF] font-jakarta text-[8px] leading-[120%] align-middle`, className)}>
            {icon && (

                <Image src={icon} width={11} height={10} alt="" />
            )}
            {children}
        </button>
    )
}

export default GradientButton