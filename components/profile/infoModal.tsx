"use client";
import React, { useEffect, useRef } from 'react'
import modalBg from "@/assets/images/profile-modal-bg.png"
import GradientButton from '../custom-components/buttons/gradient-button';
import Image from 'next/image';
const InfoModal = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
        <div className={`fixed role-modal inset-0 bg-black/80 flex items-center  justify-center z-[10] transition-all ${open ? "scale-100" : "scale-0"}`}>
            <div ref={modalRef} className="w-[300px] px-4 py-5 -translate-y-[45%] rounded-xl gap-2 overflow-hidden">

                {/* Background rasm orqa fon */}
                <div className='w-full rounded-xl overflow-hidden min-h-fit'>
                    <Image
                        src={modalBg}
                        alt="Modal Background"
                        fill
                        className="object-fill w-full z-0"
                    />

                    {/* Kontent - rasm ustida */}
                    <div className="relative z-10 flex flex-wrap gap-2">
                        <GradientButton>Ресторан</GradientButton>
                        <GradientButton>Без обязательств</GradientButton>
                        <GradientButton>Все серьезно</GradientButton>
                        <GradientButton>Вирт</GradientButton>
                        <GradientButton>Клуб</GradientButton>
                    </div>
                </div>
                <div className='mt-10'>

                    afsdsdf
                </div>
            </div>
        </div>

    )
}

export default InfoModal