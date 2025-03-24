"use client";
import React, { useEffect, useRef } from 'react'

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
        <div className={`fixed role-modal inset-0 bg-black/80 flex items-center justify-center z-[10] transition-all ${open ? "scale-100" : "scale-0"}`}>
            <div ref={modalRef} className="relative w-[300px] px-4 py-5 rounded-xl flex flex-col items-center justify-center gap-2 border-2 border-[#AE4983]" style={{ background: "linear-gradient(0deg, #6B3353, #6B3353)", boxShadow: "0px -14px 0px 0px #6B3353 inset" }}>a


                <div className="absolute left-1/2 top-0"></div>
            </div>
        </div >
    )
}

export default InfoModal