import React, { ReactNode } from 'react'

interface IButtonProps { children: ReactNode, disabled?: boolean, onClick?: () => void }

const AuthButton = ({ children, disabled = false, onClick }: IButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className='w-full h-[52px] flex items-center justify-center text-white text-sm font-semibold leading-[140%] tracking-[0.3px] bg-yellow rounded-[8px]'>{children}</button>
    )
}

export default AuthButton