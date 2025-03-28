"use client";
import React, { useEffect, useRef, useState } from 'react';
import modalBg from "@/assets/images/profile-modal-bg.png";
import GradientButton from '../custom-components/buttons/gradient-button';
import Image from 'next/image';
import { TStatus } from '@/types/data.models';

interface InfoModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: TStatus[];
    onSelectStatus: (status: TStatus) => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ open, setOpen, data, onSelectStatus }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<TStatus | null>(null);

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

    const handleSelect = (status: TStatus) => {
        setSelectedStatus(status);
    };

    const handleConfirm = () => {
        if (selectedStatus) {
            onSelectStatus(selectedStatus);
            setOpen(false); // Modalni yopish
        }
    };

    return (
        <div className={`fixed inset-0 bg-black/80 flex items-center justify-center z-10 transition-all ${open ? "scale-100" : "scale-0"}`}>
            <div ref={modalRef} className="w-[300px]  px-4 py-5 rounded-xl gap-2 overflow-hidden shadow-lg">
                {/* Background image */}
                <div className="relative w-full rounded-xl overflow-hidden min-h-[150px]">
                    <Image
                        src={modalBg}
                        alt="Modal Background"
                        fill
                        className="object-fill w-full h-full"
                    />

                    {/* Kontent - rasm ustida */}
                    <div className="relative z-10 flex flex-wrap gap-2 p-4">
                        {data?.map(item => (
                            <GradientButton
                                key={item.id}
                                onClick={() => handleSelect(item)}
                                className={`transition-all ${selectedStatus?.id === item.id ? "bg-blue-500 text-white" : ""}`}
                            >
                                <Image src={item.icon} width={12} height={12} className="object-cover" alt="icon" />
                                <span>{item.name}</span>
                            </GradientButton>
                        ))}
                    </div>
                </div>

                {/* Выбрать tugmasi */}
                <GradientButton
                    onClick={handleConfirm}
                    disabled={!selectedStatus}
                    className={`mx-auto text-sm mt-5 leading-[120%] font-semibold font-poppins transition-all ${selectedStatus ? "opacity-100" : "opacity-70 cursor-not-allowed"}`}
                >
                    Выбрать
                </GradientButton>
            </div>
        </div>
    );
};

export default InfoModal;
