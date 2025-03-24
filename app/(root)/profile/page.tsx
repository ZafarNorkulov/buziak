import React from 'react'
import ProfileComponent from '@/components/profile'
import documentTextIcon from "@/assets/icons/document-text.svg"
import unregister from "@/assets/icons/unregister-user.svg"
import PostBubble from '@/components/post-bubble'
import Image from 'next/image'


const Profile = () => {
    return (
        <div className='h-screen'>
            <ProfileComponent />
            <div className="max-container flex flex-col gap-5 items-center !px-[11px] !mt-5">

                <Image src={documentTextIcon} alt='document icon' />
                <PostBubble full_name='Alisa Purpleson' galochka={unregister} likes_count={27} time='32 min' postImage={null} text='Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. ' />
            </div>
        </div>

    )
}

export default Profile