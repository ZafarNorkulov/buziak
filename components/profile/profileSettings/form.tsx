"use client"
import CustomRangeSlider from '@/components/custom-components/slider'
import React, { FormEvent, useState } from 'react'

const SettingsForm = () => {
    const [sliderRange, setSliderRange] = useState<[number, number]>([18, 70])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const data = Object.fromEntries(formData.entries())
        console.log(data, sliderRange[1])
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault() // Form default submit bo‘lmasin
            handleSubmit(e as unknown as FormEvent<HTMLFormElement>)
        }
    }

    return (
        <form className='profile-form' onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <label className='flex items-center justify-between border-b border-white'>
                <input type="text" placeholder='User Name' name="username" />
                <p className='max-w-[140px]'>gilesposture</p>
            </label>

            <label className='flex items-center justify-between border-b border-white'>
                <input type="email" placeholder='Your Email' name="email" />
                <p className='max-w-[140px]'>g***s@posture.com</p>
            </label>

            <label htmlFor='date' className='flex  justify-between border-b pt-6 border-white'>
                <input type="date" placeholder='Date Of Birth' className='w-full hidden' name="date" />
                <div className='h-[66px]  text-[#77838F] font-doppio'>Date Of Birth</div>
                <p className='max-w-[140px]'>5/11/1987</p>
            </label>

            <label className='w-full border-b border-white'>
                <textarea
                    name="desc"
                    className='w-full mt-6 focus-visible:border-none focus-visible:outline-0'
                    placeholder='Mój profil widoczny tylko...'

                />
            </label>

            <div className='flex justify-between w-full items-baseline pt-4 pb-[22px] border-b border-white'>
                <p className='mt-1 text-[#77838F] text-sm tracking-[1px]'>Język</p>
                <div className='flex justify-between items-center w-20 h-8 rounded-full bg-white/40 backdrop-blur-[20px]'>

                    <input type="radio" name="language" defaultChecked value="en" id="lang-en" className="hidden peer/en" />
                    <label htmlFor="lang-en" className='cursor-pointer rounded-full w-[30px] h-full flex items-center justify-center bg-white/50 backdrop-blur-[10px] peer-checked/en:bg-white'>
                        <p className='text-xs font-medium leading-[130%] text-[#1B1B1B] uppercase'>En</p>
                    </label>
                    :
                    <input type="radio" name="language" value="pl" id="lang-pl" className="hidden peer/pl" />
                    <label htmlFor="lang-pl" className='cursor-pointer rounded-full w-[30px] h-full flex items-center justify-center bg-white/50 backdrop-blur-[10px] peer-checked/pl:bg-white'>
                        <p className='text-xs font-medium leading-[130%] text-[#1B1B1B] uppercase'>Pl</p>
                    </label>

                </div>
            </div>
            <label htmlFor="is_photo" className='flex w-full justify-between pt-5 items-center pb-4 border-b border-white'>
                <p className='text-[#77838F] text-sm tracking-[1px]'>Tylko użytkownicy ze zdjęcem</p>
                <input type='checkbox' className='!w-6 !h-6 accent-[#EE56AC]' name="is_photo" id="is_photo" />
            </label>
            <CustomRangeSlider onChange={(range) => setSliderRange(range)} />
        </form>
    )
}

export default SettingsForm
