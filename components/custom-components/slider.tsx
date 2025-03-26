"use client";
import React, { useState } from "react";

interface CustomSliderProps {
    onChange?: (range: [number, number]) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ onChange }) => {
    const [maxVal, setMaxVal] = useState<number>(70);
    const minVal = 18;
    const min = 18;
    const max = 99;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMaxVal(value);
        onChange?.([minVal, value]);
    };

    const progressWidth = ((maxVal - minVal) / (max - min)) * 100;
    const thumbMaxLeft = ((maxVal - min) / (max - min)) * 100;

    return (
        <div className="w-full max-w-[500px] mx-auto">
            <div className="w-full flex items-center justify-center">

                <span className="text-[#77838F] tracking-[1.67px] font-amaranth text-[30px]">{maxVal} lata</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-[#F761B6] tracking-[1.67px] font-amaranth text-[30px]">{min}</span>

                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                    {/* Progress qismi */}
                    <div
                        className="absolute h-2 bg-[#F761B6] rounded-full"
                        style={{
                            left: "0%",
                            width: `${progressWidth}%`,
                        }}
                    ></div>

                    {/* Boshlang'ich nuqta (harakatsiz) */}
                    <div className="absolute -top-0.5 -left-2 w-3 h-3 bg-[#F761B6] rounded-full"></div>

                    {/* Oxirgi nuqta (harakatsiz) */}
                    <div className="absolute -top-0.5 -right-2 w-3 h-3 bg-[#EAEDF0] rounded-full"></div>

                    {/* Harakatlanuvchi thumb */}
                    <div
                        className="absolute -top-1 w-4 h-4 bg-[#F761B6] rounded-full cursor-pointer"
                        style={{ left: `${thumbMaxLeft}%`, transform: "translateX(-50%)" }}
                    ></div>

                    {/* Input range */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={handleChange}
                        className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer z-20"
                    />
                </div>

                <span className="text-[#F761B6] tracking-[1.67px] font-amaranth text-[30px]">{max}</span>
            </div>


        </div>
    );
};

export default CustomSlider;
