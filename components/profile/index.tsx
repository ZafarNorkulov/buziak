"use client"
import React, { useState, useRef } from 'react'
import tokenIcon from "@/assets/icons/token.svg"
import Image from 'next/image'
import avatar from "@/assets/images/Avatar.png"
import settings from "@/assets/icons/settings.svg"
import Bell from "@/assets/icons/bell.svg"
import GradientButton from '../custom-components/buttons/gradient-button'
import heartIcon from "@/assets/icons/heart.svg"
import editIcon from "@/assets/icons/edit.svg"
import registerMan from "@/assets/icons/register-man.svg"
import registerGirl from "@/assets/icons/register-girl.svg"
import unregister from "@/assets/icons/unregister-user.svg"
import Link from 'next/link'
import InfoModal from './infoModal'
import { useAppDispatch, useAppSelector } from '@/store'
import useGetData from '@/hooks/useGetData'
import { TStatus } from '@/types/data.models'
import instance from '@/config/axios.config'
import { fetchUser } from '@/store/user'

const ProfileComponent = () => {
    const [open, setOpen] = useState(false)
    const { user } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const getAge = (birthdate: string) => {
        const birthYear = new Date(birthdate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };

    const { data: status } = useGetData<TStatus[]>({
        queryKey: ["status"],
        url: "/profile/status/"
    })

    const changeStatus = async (selectedStatus: TStatus) => {
        try {
            const response = await instance.put("/profile/status/update/", { status: selectedStatus.id }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                console.log("Profile updated successfully", response);
                dispatch(fetchUser())
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Edit icon bosilganda textarea active bo'lishi
    const handleEditClick = () => {
        if (textareaRef.current) {
            textareaRef.current.focus()
        }
    }

    return (
        <section className='flex flex-col gap-5'>
            <div className=' flex flex-col gap-2 !px-[18px]'>
                <div className='flex items-start justify-between '>
                    <Link href={"/profile/balance"} className='w-max flex gap-1 bg-white/10 px-2 py-3 rounded-full'>
                        <Image src={tokenIcon} alt='token' />
                        <p className='text-base leading-[120%] font-medium font-jakarta text-shadow'>999</p>
                    </Link>
                    <div className='relative mt-6 '>
                        <Image src={user?.avatar ? user.avatar : avatar} width={160} height={160} className='rounded-full' alt='avatar' />
                        <Link href={"/profile/settings"} className='absolute top-4 -right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#42152d]'>
                            <Image src={settings} width={20} height={20} alt='settings' />
                        </Link>
                    </div>
                    <Link href={"/posts/notifications"} className='w-10 h-10 flex items-center justify-center bg-white/10 px-2 py-3 rounded-full'>
                        <Image src={Bell} alt='ringbell' />
                    </Link>
                </div>

                <div className='flex items-center justify-between mx-6 '>
                    <div>
                        <p className='text-xs tracking-[1px] text-gray'>Warszawa</p>
                    </div>
                    <div className='modal relative z-20 flex gap-2 -translate-x-1/4'>
                        {user && user?.status.length > 0 ? (
                            <>
                                <GradientButton className='flex gap-1 h-[26px]'>
                                    <Image src={user?.status[0]?.icon} alt='heart' width={10} height={10} />
                                    <p className='text-[8px] leading-[120%] font-semibold font-jakarta'>{user?.status[0]?.name}</p>
                                </GradientButton>
                                <Image src={editIcon} width={15} height={15} onClick={() => setOpen(true)} alt='edit' />
                            </>
                        ) : (
                            <>
                                <GradientButton className='flex gap-1 h-[26px]' onClick={() => setOpen(true)}>
                                    <Image src={heartIcon} alt='heart' width={10} height={10} />
                                    <p className='text-[8px] leading-[120%] font-semibold font-jakarta'>Ресторан</p>
                                </GradientButton>
                                <Image src={editIcon} width={15} height={15} alt='edit' />
                            </>
                        )}
                    </div>
                    <div></div>
                </div>

                <div className='flex items-center gap-1.5 w-max mx-auto translate-x-1/6 mt-2'>
                    <h3 className='text-xl leading-[120%] font-medium font-jakarta'>{user?.first_name}, {user?.birth_date ? getAge(user.birth_date) : "N/A"}</h3>
                    <Link href={"/profile/verification"}>
                        <Image
                            src={
                                user?.verified
                                    ? (user?.gender && user.gender.name === "Girl"
                                        ? registerGirl
                                        : registerMan)
                                    : unregister
                            }
                            width={25}
                            height={25}
                            alt="galochka"
                        />
                    </Link>
                </div>

                <div className='w-full px-6 py-2 rounded-4xl relative mt-2 bg-[#675B78]'>
                    <textarea
                        ref={textareaRef}
                        className='w-full text-sm leading-[120%] font-jakarta text-white/70 text-shadow focus-within:border-0 focus-within:outline-none'
                        rows={6}
                        defaultValue={"Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле."}
                    />
                    <Image
                        src={editIcon}
                        width={15}
                        height={15}
                        className='absolute right-3 bottom-3 cursor-pointer'
                        alt='edit'
                        onClick={handleEditClick} // Edit bosilganda textarea active bo'ladi
                    />
                </div>
            </div>
            <InfoModal open={open} data={status ? status : []} setOpen={setOpen} onSelectStatus={changeStatus} />
        </section>
    )
}

export default ProfileComponent
