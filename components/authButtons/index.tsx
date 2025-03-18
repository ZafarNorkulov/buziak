import Link from 'next/link'
import React, { ReactNode } from 'react'

interface IButtonProps { children: ReactNode, disabled?: boolean, onClick?: () => void, redirect?: string }

const AuthButton = ({ children, disabled = false, onClick, redirect = "#" }: IButtonProps) => {
    return (
        <Link href={redirect}>
            <button disabled={disabled} onClick={onClick} className='w-full h-[52px] flex items-center justify-center text-white text-sm font-semibold leading-[140%] tracking-[0.3px] bg-yellow rounded-[8px]'><span style={{
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
            }}>{children}</span></button>
        </Link>
    )
}

export default AuthButton

