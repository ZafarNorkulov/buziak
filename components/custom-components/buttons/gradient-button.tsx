"use client";
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GradientButtonProps {
    children: React.ReactNode;
    icon?: StaticImageData;
    shadow?: boolean;
    className?: string;
    onClick?: () => void;
    disabled?: boolean
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, icon, shadow, className = "", onClick, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={twMerge(
                `w-max min-h-[26px] p-2 rounded-4xl flex items-center gap-1 button-gradient 
                ${shadow ? 'shadow-button' : ''} font-bold text-[#F1EAEF] font-jakarta 
                text-[8px] leading-[120%] align-middle`,
                className
            )}
            onClick={onClick}
        >
            {icon && <Image src={icon} width={11} height={10} alt="icon" />}
            {children}
        </button>
    );
};

export default GradientButton;
