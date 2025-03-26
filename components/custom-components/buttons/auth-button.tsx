"use client"
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface IButtonProps { children: ReactNode, onClick?: () => void, redirect?: string }

const AuthButton = ({ children, onClick, redirect = "#" }: IButtonProps) => {
    const router = useRouter()

    const handleClick = () => {
        if (onClick) onClick();
        if (redirect) router.push(redirect);
    }

    return (
        <button type='submit' onClick={handleClick} className='w-full h-[52px] flex items-center justify-center text-white text-sm font-semibold leading-[140%] tracking-[0.3px] bg-yellow rounded-[8px]'><span style={{
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
        }}>{children}</span></button>
    )
}

export default AuthButton

