import React from 'react'
import checkMark from "@/assets/icons/check-mark.svg"
import Image, { StaticImageData } from 'next/image'
import galleryIcon from "@/assets/icons/gallery.svg"
import imageOverlay from "@/assets/images/image-overlay.png"

interface IMessage {
    sendTime: string,
    message: string | StaticImageData,
    is_read: boolean,
    senderType: "sender" | "receiver"
}

const ChatBubble = ({ sendTime, message, is_read, senderType }: IMessage) => {
    return (
        <div className={`flex ${senderType === "sender" ? "justify-end" : "justify-start"}`}>

            <div className={` relative min-h-12 rounded-[20px] px-3 ${typeof message === "string" ? "w-max max-w-[65%] p-3 pt-[18px]" : "w-full pb-[22px] pt-11 max-h-[310px]"} ${senderType === "sender" ? "bg-[#4058DD] rounded-tr-[0]" : "bg-[#9D3670] rounded-tl-[0]"} rounded-xl `}>
                {/* time */}
                <div className={`absolute top-0 ${senderType === "sender" ? "right-[3px]" : "left-[3px]"}`}>
                    <span className='text-xs leading-4 font-light font-urbanist text-[#E1E1E1]'>{sendTime}</span>
                </div>
                {/* Text */}
                {
                    typeof message === "string" ?
                        <p className='text-sm leading-6  font-medium '>{message}</p>
                        :
                        <div className='relative rounded-[20px] overflow-hidden '>
                            <div className='overlay absolute inset-0 w-full h-max max-h-[211px] rounded-[20px]  z-10 ' >
                                <Image src={imageOverlay} className='w-full h-full backdrop-blur-[10px]' alt='' />
                            </div>
                            <div className="absolute inset-0 flex items-end  justify-center z-20">

                            </div>
                            <div className='absolute inset-0 top-3 flex flex-col items-center justify-around z-20 '>
                                <Image src={galleryIcon} alt='gallery' />
                                <p className='leading-[120%] font-jakarta text-white text-base font-bold pb-3' style={{ textShadow: "0px 4px 4px 0px #00000040" }}>Откройте чтобы посмотреть</p>

                            </div>
                            <Image src={message} className='object-cover object-[center_0] w-full max-w-[310px] h-max max-h-[175px] m-5 rounded-[20px] opacity-70 ' alt="" />
                        </div>
                }

                {/* CheckMark */}
                {senderType === "sender" && is_read &&
                    <div className={`absolute bottom-[7px] right-[14px]`}>
                        <Image src={checkMark} alt="" />
                    </div>

                }

            </div>
        </div>
    )
}

export default ChatBubble