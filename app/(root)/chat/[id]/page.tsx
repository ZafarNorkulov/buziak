"use client"
import React from 'react'
import noImage from "@/assets/images/noImage.png"
import Image from 'next/image'
import { MenuProps } from 'antd'
import BeatifulDropDown from '@/components/custom-components/beautifulDropDown'
// Import icons
import registGirlIcon from "@/assets/icons/register-girl.svg"
import moreIcon from "@/assets/icons/more.svg"
import menuTrash from "@/assets/icons/menu-trash.svg"
import blockIcon from "@/assets/icons/block.svg"

import ChatBubble from '@/components/chatBubble'
import user from "@/assets/images/chat-user.png"
import ConfirmModal from '@/components/custom-components/modal/confirmModal'
import ChatFooter from '@/components/footer/chatFooter'

const ChatById = () => {
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const [isOpenModal2, setIsOpenModal2] = React.useState(false)
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='flex items-center gap-3 ' onClick={() => setIsOpenModal2(true)}>
                    <Image src={blockIcon} width={24} height={24} alt='like' />
                    <span className='text-sm font-semibold leading-6 align-middle text-white font-urbanist'>
                        Block Alisa
                    </span>

                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='flex items-center gap-3 ' onClick={() => setIsOpenModal(true)}>
                    <Image src={menuTrash} width={24} height={24} alt='like' />
                    <span className='text-sm font-bold leading-6 align-middle text-red font-urbanist'>

                        Unmatch
                    </span>
                </div>
            ),
        },

    ];


    return (
        <section
            className="h-full relative"
        >
            <div className="max-container ">
                {/* header */}
                <div className='fixed  top-0 left-4 right-4 flex gap-4 items-center py-2'>

                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                        <Image src={noImage} className='w-full h-full ' alt='avatar' />
                    </div>
                    <div className='flex justify-between w-[calc(100%-60px)]'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-end gap-1'>
                                <h2 className='text-sm leading-[100%] tracking-[0]'>Alisa Purpleson</h2>
                                <Image src={registGirlIcon} width={15} height={15} alt='' />
                            </div>

                            <span className=' text-xs tracking-[1px] leading-[100%] text-gray'>Warszawa</span>
                        </div>
                        <BeatifulDropDown items={items} >
                            <Image src={moreIcon} width={20} height={4} alt='more' />
                        </BeatifulDropDown>
                    </div>
                </div>

                {/* Body */}

                <div className='absolute top-[66px] left-0 right-0 bottom-[154px] flex flex-col gap-2 w-full h-[calc(100vh-232px)] py-5 px-[10px] overflow-y-auto chat-scroll'>
                    <ChatBubble sendTime='19:44' message='Hi, Good moring, Dr Anastasya' is_read={true} senderType='sender' />
                    <ChatBubble sendTime='19:44' message={user} is_read={true} senderType='receiver' />
                    <ChatBubble sendTime='19:44' message='I have problems with my hands, which have been hurting lately.' is_read={true} senderType='receiver' />

                    <ChatBubble sendTime='19:44' message='Hello' is_read={true} senderType='receiver' />
                    <ChatBubble sendTime='19:44' message='Hello' is_read={true} senderType='receiver' />
                    <ChatBubble sendTime='19:44' message='Hello' is_read={true} senderType='receiver' />
                    <ChatBubble sendTime='19:44' message='Hi, Good moring, Dr Anastasya' is_read={true} senderType='sender' />
                    <ChatBubble sendTime='19:44' message='Hi, Good moring, Dr Anastasya' is_read={true} senderType='sender' />
                    <ChatBubble sendTime='19:44' message='Hello' is_read={true} senderType='receiver' />
                    <ChatBubble sendTime='19:44' message='Hello' is_read={true} senderType='receiver' />
                    <ChatBubble sendTime='19:44' message='Hello' is_read={true} senderType='receiver' />
                </div>

                {/* Footer */}
                <ChatFooter />
            </div>
            <ConfirmModal title="Czy chcesz usunąć ten metch?" desc=" Tego nie będzie można cofnąć." buttonText="Tak, usun" buttonClick={() => setIsOpenModal(false)} open={isOpenModal} setOpen={setIsOpenModal} />
            <ConfirmModal title="Zablokować użytkownika Alice?" desc=" Tego nie będzie można cofnąć." buttonText="Tak, zablokuj" buttonClick={() => setIsOpenModal2(false)} open={isOpenModal2} setOpen={setIsOpenModal2} />
        </section>
    )
}

export default ChatById