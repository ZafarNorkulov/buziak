"use client"
import React, { useEffect, useRef } from 'react'
import xIcon from "@/assets/icons/modal-x.svg"
import Image from 'next/image'
import GradientButton from '../buttons/gradient-button'


interface IConfirModalProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    desc: string,
    buttonText: string,
    buttonClick: () => void
}

const ConfirmModal = ({ open, setOpen, title, desc, buttonText, buttonClick }: IConfirModalProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, setOpen]);
    return (
        <div className={`fixed inset-0 bg-black/85 flex items-center justify-center z-[9999] transition-all ${open ? "scale-100" : "scale-0"}`}>
            <div className='bg-[#675B78] w-[83vw] rounded-4xl relative py-3 px-5' ref={modalRef}>
                <div className='flex w-full h-6 justify-end'>

                    <Image src={xIcon} alt='like' onClick={() => setOpen(false)} className='absolute top-3 right-[19px] cursor-pointer' />
                </div>
                <div className='w-full flex flex-col justify-center gap-4 items-center font-jakarta'>

                    <h3 className='text-sm leading-[120%] font-bold'>{title}</h3>
                    <p className='text-sm font-extralight'>{desc}</p>
                    <GradientButton className='text-xl font-medium px-[34px] py-[7px]' onClick={buttonClick}>{buttonText}</GradientButton>
                </div>
            </div>

        </div>
    )
}

export default ConfirmModal