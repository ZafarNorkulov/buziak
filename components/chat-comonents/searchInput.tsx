"use client"
import React, { useState } from 'react';
import loopIcon from "@/assets/icons/loop.svg"
import Image from 'next/image';

const SearchInput = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative w-full max-w-md ">
            {/* Input */}
            <input
                type="text"
                className={`w-full h-14 text-base border-none bg-white/10 rounded-full px-4 py-3 outline-none transition-all ${isFocused ? 'pl-4' : 'pl-4'}`
                }
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => setIsFocused(e.target.value ? true : false)}
            />

            {/* Overlay Icon + Text */}
            {!isFocused && (
                <div className="absolute inset-0 flex gap-2 items-center justify-center pointer-events-none text-gray-400">
                    {/* <FiSearch className="mr-2" size={20} /> */}

                    <Image src={loopIcon} alt="Search Icon" width={20} height={20} />
                    <span className='text-base leading-[100%] text-white/50 tracking-[0] font-jakarta mt-1'>Search</span>
                </div>
            )}
        </div>
    );
};

export default SearchInput;
