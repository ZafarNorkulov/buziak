"use client"
import React, { FormEvent, useState, useEffect } from 'react'
import Image from 'next/image'
import BackButton from '../../custom-components/buttons/back'
import noImage from "@/assets/images/profile-avatar.png"
import communicationIcon from "@/assets/icons/communcation.svg"
import Link from 'next/link'
import useGetData from '@/hooks/useGetData'
import instance from '@/config/axios.config'
import CustomRangeSlider from '@/components/custom-components/slider'
import { IProfile } from '@/types/data.models'

const ProfileSettings = () => {
    const [imagePreview, setImagePreview] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [sliderRange, setSliderRange] = useState<[number, number]>([18, 70]);
    const [isPhotoChecked, setIsPhotoChecked] = useState<boolean>(false);

    const { data: profile, isLoading } = useGetData<IProfile>({
        queryKey: ["profile"],
        url: "/profile/",
    });

    useEffect(() => {
        if (profile) {
            setSliderRange([+profile.min_age, +profile.max_age]);
            setIsPhotoChecked(profile.has_profile_picture ?? false);
            setImageUrl(profile.avatar || null);
        }
    }, [profile]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImagePreview(file);
            const objectUrl = URL.createObjectURL(file);
            setImageUrl(objectUrl);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Append additional data
        formData.append("min_age", String(sliderRange[0]));
        formData.append("max_age", String(sliderRange[1]));
        formData.append("has_profile_picture", String(isPhotoChecked));

        // Append image if uploaded
        if (imagePreview) {
            formData.append("avatar", imagePreview);
        }

        try {
            const response = await instance.put("/profile/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                console.log("Profile updated successfully", response);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
        }
    };

    function maskInput(e: string) {
        const [name, domain] = e.split('@');
        if (!name && !domain) return e
        return `${name[0]}***${name[name.length - 1]}@${domain}`

    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className='max-container !px-[11px] h-full '>
                <div className='flex items-start justify-between'>
                    <BackButton />
                    <div className='flex flex-col items-center gap-2'>
                        <div className='w-[90px] h-[90px] relative overflow-hidden rounded-full border-[3px] border-white'>
                            <Image
                                src={imageUrl || profile?.avatar || noImage}
                                alt='Profile Avatar'
                                fill
                                className='object-cover'
                            />
                        </div>
                        <label htmlFor='file' className='px-3.5 py-1.5 bg-[#675B78] rounded-2xl'>
                            <input type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={handleFileChange}
                                id="file"
                                className='hidden' />
                            <p className='text-sm tracking-[1px] leading-none font-doppio'>Change Profile Picture</p>
                        </label>
                    </div>
                    <Link href={"/profile/settings/change-photo"}>
                        <Image src={communicationIcon} alt='' />
                    </Link>
                </div>

                {/* Settings Form */}
                <form className='profile-form' onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                    <label className='flex items-center justify-between border-b border-white'>
                        <input type="text" placeholder='User Name' name="first_name" />
                        <p className='font-doppio'>{profile?.first_name}</p>
                    </label>

                    <label className='flex items-center justify-between border-b border-white'>
                        <input type="email" placeholder='Your Email' name="email" />
                        <p className='font-doppio'>{profile?.email && maskInput(profile.email)}</p>
                    </label>


                    <label htmlFor='date' className='flex  justify-between border-b pt-6 border-white'>
                        <input type="date" name="date" className='hidden' />
                        <div className='h-[66px] text-[#77838F] font-doppio'>Date Of Birth</div>
                        <p className='font-doppio'>{profile?.birth_date}</p>
                    </label>

                    <label className='w-full border-b border-white'>
                        <textarea
                            name="description"
                            className='w-full mt-6 focus-visible:border-none focus-visible:outline-0'
                            placeholder='Describe yourself...'
                        />
                    </label>

                    <div className='flex justify-between w-full items-baseline pt-4 pb-[22px] border-b border-white'>
                        <p className='mt-1 text-[#77838F] text-sm tracking-[1px]'>Language</p>
                        <div className='flex justify-between items-center w-20 h-8 rounded-full bg-white/40 backdrop-blur-[20px]'>
                            <input type="radio" name="language" defaultChecked={profile?.language === 1} value={1} id="lang-en" className="hidden peer/en" />
                            <label htmlFor="lang-en" className='cursor-pointer rounded-full w-[30px] h-full flex items-center justify-center bg-white/50 backdrop-blur-[10px] peer-checked/en:bg-white'>
                                <p className='text-xs font-medium leading-[130%] text-[#1B1B1B] uppercase'>En</p>
                            </label>
                            :
                            <input type="radio" name="language" defaultChecked={profile?.language === 2} value={2} id="lang-pl" className="hidden peer/pl" />
                            <label htmlFor="lang-pl" className='cursor-pointer rounded-full w-[30px] h-full flex items-center justify-center bg-white/50 backdrop-blur-[10px] peer-checked/pl:bg-white'>
                                <p className='text-xs font-medium leading-[130%] text-[#1B1B1B] uppercase'>Pl</p>
                            </label>
                        </div>
                    </div>

                    <label htmlFor="is_photo" className='flex w-full justify-between pt-5 items-center pb-4 border-b border-white'>
                        <span className='text-[#77838F] text-sm tracking-[1px]'>Tylko użytkownicy ze zdjęcem</span>
                        <input type='checkbox'
                            checked={isPhotoChecked}
                            onChange={(e) => setIsPhotoChecked(e.target.checked)}
                            className='!w-6 !h-6 accent-[#EE56AC]'
                            name="is_photo"
                            id="is_photo" />
                    </label>

                    <CustomRangeSlider onChange={(range) => setSliderRange(range)} value={profile?.max_age ? +profile.max_age : 50} />

                    <button type="submit" className="bg-[#675B78] px-4 py-2 mt-4 text-white rounded-2xl">Save Changes</button>
                </form>
            </div>
        </section>
    );
};

export default ProfileSettings;
