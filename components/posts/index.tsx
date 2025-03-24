"use client"
import React from 'react'
import Image from 'next/image';
import settings from "@/assets/icons/settings.svg"
import fileIcon from "@/assets/icons/file-dark.svg"
import tokenIcon from "@/assets/icons/token.svg"
import { Input } from 'antd';
import PostBubble from '../post-bubble/index.jsx';
import unregisterUser from "@/assets/icons/unregister-user.svg"
import chatuser from "@/assets/images/chat-user.png"
import RoleModal from '@/components/posts/sub/modal';

const PostsComponent = () => {
    const [activeTab, setActiveTab] = React.useState('tab1');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [gender, setGender] = React.useState<"Man" | "Girl">("Man");
    // ! Datani tabdagi qiymatga qarab o'zgartiriladi
    const data = [
        {
            full_name: 'Alisa Purpleson',
            galochka: unregisterUser,
            likes_count: 27,
            time: '32 min',
            postImage: null,
            text: 'Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. ',
        },
        {
            full_name: 'Alisa Purpleson',
            galochka: unregisterUser,
            likes_count: 27,
            time: '32 min',
            postImage: chatuser,
            text: 'Текст который напишет пользователь у себя в профиле. Текст который напишет пользователь у себя в профиле. ',
        },
    ]

    return (
        <div className=" relative">
            <div className='fixed top-5 left-4 right-4'>

                <div className='w-full flex justify-between items-center px-3'>
                    <div></div>
                    {/* Tab */}
                    <div className="flex w-full justify-center gap-1.5 ">
                        <button
                            className={`p-2 pb-3 text-center border-b-2 border-white text-lg  leading-[120%] font-jakarta ${activeTab === 'tab1' ? '  text-white font-medium' : ' text-white/50 font-light'}`}
                            onClick={() => setActiveTab('tab1')}
                        >

                            Wszystkie
                        </button>
                        <button
                            className={`p-2 py-3 text-center border-b-2 border-white text-lg  leading-[120%] font-jakarta  ${activeTab === 'tab2' ? '  text-white font-medium' : ' text-white/50 font-light'}`}
                            onClick={() => setActiveTab('tab2')}
                        >
                            Gorące
                        </button>
                    </div>
                    <button onClick={() => setModalVisible(true)}>
                        <Image src={settings.src} alt='settings' width={20} height={20} />
                    </button>
                </div>
                <div className='mt-4'>

                    <Input className='h-12 text-[#475569] text-sm leading-[140%] tracking-[0.3px] placeholder:!text-[#475569]' placeholder='Enter full name'
                        prefix={<label htmlFor='file'>
                            <input type="file" id='file' className='hidden' />
                            <Image src={fileIcon} alt='file' width={20} height={20} />
                        </label>}
                        suffix={activeTab === "tab2" ? (<div className='flex gap-1 items-center'>

                            <Image src={tokenIcon} alt='token' width={20} height={20} />
                            <span className='text-[15px] font-jakarta leading-[120%] font-medium text-[#3D3D3D] ' style={{
                                textShadow: "0px 4px 4px 0px #00000040"
                            }}>100</span>
                        </div>) : (
                            <span className='text-[10px] leading-[120%] font-medium font-jakarta text-[#3D3D3D91] '>Masz możliwość wysyłania</span>
                        )}
                    />
                </div>
            </div>
            <div className='absolute top-[120px] left-0 right-0 bottom-[90px] flex flex-col gap-2 w-full h-[calc(100vh-232px)] py-5 px-[10px] overflow-y-auto chat-scroll'>
                {
                    data?.map((Item, index) => <PostBubble full_name={Item.full_name} galochka={Item.galochka} likes_count={Item.likes_count} time={Item.time} postImage={Item.postImage} text={Item.text} key={index} />)
                }

            </div>

            <RoleModal open={modalVisible} setOpen={setModalVisible} value={gender} setValue={setGender} buttonClick={() => setModalVisible(true)} />
        </div>
    )
}

export default PostsComponent