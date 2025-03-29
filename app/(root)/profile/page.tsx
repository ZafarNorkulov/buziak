"use client"
import React from 'react'
import ProfileComponent from '@/components/profile'
import documentTextIcon from "@/assets/icons/document-text.svg"
import unregister from "@/assets/icons/unregister-user.svg"
import PostBubble from '@/components/post-bubble'
import Image from 'next/image'
import { useAppSelector } from '@/store'



const Profile = () => {
    const { user } = useAppSelector(state => state.user)
    return (
        <div className='h-[calc(100vh-20px)]'>
            <div className="max-container  !px-5">
                <ProfileComponent />
                <div className='flex flex-col gap-5 items-center px-2  !mt-5'>

                    <Image src={documentTextIcon} alt='document icon' />
                    <PostBubble full_name={user?.first_name} galochka={unregister} likes_count={27} time='32 min' postImage={null} text='Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. ' />
                </div>
            </div>
        </div>

    )
}

export default Profile