import React from 'react'
import { Badge } from 'antd';
import SearchInput from '@/components/chat-comonents/searchInput';
import ChatItem from '@/components/chat-comonents/chatItem';


const Chat = () => {
    return (
        <section
            className="h-full relative"

        >
            <div className="max-container !h-full" >
                <div className='fixed top-5 left-4 right-5 z-20'>

                    <SearchInput />
                    <div className='w-full flex justify-between mt-4'>
                        <h3 className='text-xl font-semibold leading-[120%] font-jakarta'>Сообщения</h3>
                        <div className='flex items-center gap-1'>

                            <h3 className='text-xl font-semibold leading-[120%] font-jakarta text-white/50'>Запросы</h3>
                            <Badge count={"99+"} showZero style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: "9px",
                                lineHeight: "120%",
                                fontWeight: 700
                            }}
                                color='#FA42AA80' />
                        </div>
                    </div>
                </div>


                {/* ChatList */}
                <div className='flex flex-col absolute z-10 w-[calc(100%-32px)] h-[calc(100vh-250px)] top-[116px] bottom-0 gap-4 pb-1 overflow-auto chat-scroll'>
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
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </div>
            </div>
        </section>
    )
}

export default Chat