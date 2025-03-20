import React from 'react'
import moreIcon from "@/assets/icons/more.svg"
import Image from 'next/image'
import galochka from "@/assets/icons/galochka.svg"
import likeHand from "@/assets/icons/like-hand.svg"
import chatIconPink from "@/assets/icons/chaticon-purple.svg"
import { Dropdown, MenuProps } from 'antd'
import menuTrash from "@/assets/icons/menu-trash.svg"
import Link from 'next/link'


const PostBubble = () => {

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='flex items-center gap-3 '>
                    <Image src={menuTrash} width={24} height={24} alt='like' />
                    <span className='text-sm font-bold leading-6 align-middle text-red font-urbanist'>

                        Unmatch
                    </span>
                </div>
            ),
            className: "text-green"
        },

    ];


    return (
        <div className='w-full flex flex-col gap-1 p-3 rounded-b-xl rounded-tr-[20px] bg-[#9D3670]'>
            {/* PostBubble header */}
            <div className='flex gap-4'>
                <div className='user-avatar w-[50px] h-[50px] rounded-full bg-[#D8D8D8] '>

                </div>

                <div className='w-[calc(100%-66px)] flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-1 items-end text-sm text-white tracking-[1px]'>
                            <h2>Alisa Purpleson</h2>
                            <Image src={galochka} width={15} height={15} alt='galochka' />
                        </div>
                        <span className='text-gray text-xs tracking-[1px]'>Warszawa</span>

                    </div>
                    <div className='mt-1.5'>
                        <Dropdown menu={{ items }} placement='bottomRight' trigger={['click']} overlayClassName='!min-w-[165px] post-bubble-dropdown'>

                            <Image src={moreIcon} width={20} height={4} alt='more' />
                        </Dropdown>
                    </div>
                </div>

            </div>
            {/* PostBubble body */}
            <div className=''>
                <p className='text-sm font-semibold leading-[120%] font-urbanist' style={{
                    textShadow: "0px 4px 4px #00000040"
                }}>
                    Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле.
                </p>
            </div>
            {/* PostBubble footer */}
            <div className='w-full flex justify-between items-end'>
                <div className='flex gap-[10px]'>

                    <div className='flex gap-2 bg-[#FFD7F9] px-4 rounded-2xl py-2'>
                        <Image src={likeHand} alt='more' />
                        <span className='text-xs text-pink tracking-[1px]'>27</span>
                    </div>
                    <Link href={"/chat/1"} className='flex items-center justify-center bg-[#FFD7F9] rounded-2xl px-2'>
                        <Image src={chatIconPink} alt='more' />
                    </Link>
                </div>
                <p className='text-xs  text-[#E1E1E1] font-urbanist'>32 min</p>
            </div>
        </div>
    )
}

export default PostBubble