
"use client"
import React, { ReactNode } from 'react'
import moreIcon from "@/assets/icons/more.svg"
import Image, { StaticImageData } from 'next/image'
import chatIconPink from "@/assets/icons/chaticon-purple.svg"
import { MenuProps } from 'antd'
import menuTrash from "@/assets/icons/menu-trash.svg"
import Link from 'next/link'
import BeatifulDropDown from '../custom-components/beautifulDropDown'
import ConfirmModal from '../custom-components/modal/confirmModal'
import blockIcon from "@/assets/icons/block.svg"
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/store'
import noImage from "@/assets/images/noImage.png"

interface IPostBubbleProps {
    full_name?: string,
    galochka: StaticImageData,
    text: ReactNode,
    likes_count: number,
    time: string,
    postImage: StaticImageData | null
}

const PostBubble = ({ full_name = "", galochka, text, postImage, likes_count, time }: IPostBubbleProps) => {

    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const [isOpenModal2, setIsOpenModal2] = React.useState(false)
    const pathname = usePathname()
    const isPostPage = pathname.startsWith('/post')
    const { user } = useAppSelector(state => state.user)

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='flex items-center gap-3 ' onClick={() => setIsOpenModal2(true)}>
                    <Image src={blockIcon} width={24} height={24} alt='like' />
                    <span className='text-sm font-semibold leading-6 align-middle text-white font-urbanist'>
                        Block {full_name}
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
                        {isPostPage ? "Report" : "Unmatch"}
                    </span>
                </div>
            ),
        },

    ];


    return (
        <div className='w-full flex flex-col gap-1 p-3 rounded-b-xl rounded-tr-[20px] bg-[#9D3670]'>
            {/* PostBubble header */}
            <div className='flex gap-4'>
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                    <Image
                        src={user?.avatar ? user.avatar : noImage}
                        alt="avatar"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className='w-[calc(100%-66px)] flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-1.5 items-center text-sm text-white tracking-[1px]'>
                            <h2>{full_name}</h2>
                            <Image src={galochka} width={15} height={15} alt='galochka' />
                        </div>
                        <span className='text-gray text-xs tracking-[1px]'>Warszawa</span>

                    </div>
                    <div className='mt-1.5'>
                        <BeatifulDropDown items={items}>
                            <Image src={moreIcon} width={20} height={4} alt='more' />
                        </BeatifulDropDown>
                    </div>
                </div>

            </div>
            {/* PostBubble body */}
            <div className='flex flex-col gap-1.5 w-full'>
                {postImage && <Image src={postImage} className='object-cover object-[center_0] w-full h-max max-h-[210px] rounded-[10px] ' alt='post' />}
                <p className='text-sm font-semibold leading-[120%] tracking-[0] font-urbanist' style={{
                    textShadow: "0px 4px 4px #00000040"
                }}>
                    {text}
                </p>
            </div>
            {/* PostBubble footer */}
            <div className='w-full flex justify-between items-end mt-1'>
                <div className='flex gap-[10px]'>

                    {likes_count > 0 && (
                        <div className='flex gap-2 bg-[#FFD7F9] px-4 rounded-2xl py-2'>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9258 4.79668C10.9258 4.06081 10.3292 3.46427 9.59336 3.46427H7.72798V1.59889C7.72798 0.799446 7.26963 0 6.39557 0C5.52151 0 5.06316 0.799446 5.06316 1.59889V2.33438L4.10116 3.29638L2.87001 3.69611C2.747 3.39668 2.45557 3.20099 2.13186 3.20045H0.799446C0.357924 3.20045 0 3.55837 0 3.9999V9.8625C0 10.304 0.357924 10.662 0.799446 10.662H2.13186C2.57338 10.662 2.9313 10.304 2.9313 9.8625V9.75858L4.08784 10.5287C4.21896 10.6157 4.37284 10.662 4.5302 10.662H9.59336C10.3292 10.662 10.9258 10.0654 10.9258 9.32954V9.06306C10.783 8.81571 10.783 8.51096 10.9258 8.26361V7.46417C10.783 7.21682 10.783 6.91207 10.9258 6.66472V5.86527C10.783 5.61792 10.783 5.31318 10.9258 5.06583V4.79668ZM2.13186 9.85984H0.799446V3.99723H2.13186V9.85984ZM10.1263 5.06316H9.7266C9.50584 5.06316 9.32688 5.24212 9.32688 5.46288C9.32688 5.68365 9.50584 5.86261 9.7266 5.86261H10.1263V6.66205H9.7266C9.50584 6.66205 9.32688 6.84102 9.32688 7.06178C9.32688 7.28254 9.50584 7.4615 9.7266 7.4615H10.1263V8.26095H9.7266C9.50584 8.26095 9.32688 8.43991 9.32688 8.66067C9.32688 8.88143 9.50584 9.06039 9.7266 9.06039H10.1263V9.32687C10.1263 9.62122 9.88771 9.85984 9.59336 9.85984H4.5302L2.9313 8.79391V4.51421L4.5302 3.99723L5.86261 2.66482V1.59889C5.86261 1.59889 5.86261 0.799446 6.39557 0.799446C6.92854 0.799446 6.92854 1.59889 6.92854 1.59889V4.26371H9.59336C9.88771 4.26371 10.1263 4.50233 10.1263 4.79668V5.06316Z" fill="#FF63BB" />
                            </svg>

                            <span className='text-xs text-pink tracking-[1px]'>{likes_count}</span>
                        </div>
                    )}
                    <Link href={"#"} className='flex items-center justify-center bg-[#FFD7F9] rounded-2xl px-2'>
                        <Image src={chatIconPink} alt='more' />
                    </Link>
                </div>
                <p className='text-xs  text-[#E1E1E1] font-urbanist'>{time}</p>
            </div>
            <ConfirmModal title="Dziękujemy" desc="Rozpatrzymy Twoją skargę." buttonText="Okej" buttonClick={() => setIsOpenModal(false)} open={isOpenModal} setOpen={setIsOpenModal} />
            <ConfirmModal title="Zablokować użytkownika Alice?" desc="Tego nie będzie można cofnąć." buttonText="Tak, zablokuj" buttonClick={() => setIsOpenModal2(false)} open={isOpenModal2} setOpen={setIsOpenModal2} />
        </div>
    )
}

export default PostBubble