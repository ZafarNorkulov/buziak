import React from 'react'
import documentTextIcon from "@/assets/icons/document-text.svg"
import Image from 'next/image'
import PostBubble from '@/components/post-bubble'
import registerGirl from "@/assets/icons/register-girl.svg"


const LastPost = () => {
    return (
        <div className='w-full h-full flex flex-col gap-2 '>
            <div className='w-full flex flex-col justify-center items-center'>
                <Image src={documentTextIcon} alt='document icon' />
                <span className='text-white70 font-jakarta'>Последний твит</span>
            </div>
            <PostBubble full_name='Alisa Purpleson' galochka={registerGirl} likes_count={27} time='32 min' postImage={null} text='Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. ' />
            {/* When user has no posts */}
            {/* <div className='h-[100px] w-full flex justify-center'>

                <p className='text-sm leading-[120%] font-jakarta text-white70'>Пользователь еще не оставил постов...</p>
            </div> */}

            <button className='h-[55px] rounded-4xl text-xl leading-[120%] font-bold font-jakarta bg-[#8C294D] button-shadow mt-3 mx-[27px]'>Пожаловаться</button>
        </div>
    )
}

export default LastPost