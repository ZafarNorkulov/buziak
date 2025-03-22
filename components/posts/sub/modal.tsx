"use client"
import React, { useEffect, useRef } from 'react'
import GradientButton from '@/components/custom-components/buttons/gradient-button'
import { Segmented } from 'antd'


interface IRoleModalProps {
    open: boolean,
    value: "Man" | "Girl",
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setValue: React.Dispatch<React.SetStateAction<"Man" | "Girl">>,
    buttonClick: () => void
}

const RoleModal = ({ open, value, setOpen, setValue, buttonClick }: IRoleModalProps) => {
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
        <div className={`fixed role-modal inset-0 bg-black/95 flex items-center justify-center z-[9999] transition-all ${open ? "scale-100" : "scale-0"}`}>
            <div className='w-[73vw] rounded-4xl relative py-3 px-5 -translate-y-1/2' ref={modalRef}>

                <div className='w-full flex flex-col justify-center gap-8 items-center font-jakarta'>
                    <h3 className='text-2xl leading-[120%] font-medium font-jakarta '>Kogo szukasz?</h3>
                    {/* tab */}
                    <Segmented<string>
                        size="large"
                        options={["Man", "Girl"]}
                        value={value}
                        onChange={(val) => {
                            setValue(val as "Man" | "Girl");
                        }}
                        block
                        shape="round"
                        className={`signup-segment min-w-[280px] ${value === "Girl" && "girl"} flex text-white font-urbanist`}
                    />
                    <GradientButton className='text-xl w-[184px] flex justify-center font-medium px-[34px] py-[7px]' onClick={buttonClick}>Wybrac</GradientButton>
                </div>
            </div>

        </div>
    )
}

export default RoleModal