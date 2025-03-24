import React from 'react'
import BackButton from '../custom-components/buttons/back'
import ChatItem from '../chat/chatItem'

const Notifications = () => {
    return (
        <section className='relative'>
            <div className="max-container ">
                {/* header */}
                <div className='fixed top-3 left-4 right-4 flex items-center justify-between'>
                    <BackButton />
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg leading-[120%] font-jakarta p-2'>Wiadomości</p>
                        <div className='w-full h-0.5 bg-white' />
                    </div>
                    <div></div>
                </div>
                {/* body */}
                <div className='flex flex-col absolute z-10 w-[calc(100%-32px)] h-[calc(100vh-170px)] top-[70px] bottom-0 gap-4 pb-2 overflow-auto chat-scroll'>
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </div>
            </div>


        </section>
    )
}

export default Notifications