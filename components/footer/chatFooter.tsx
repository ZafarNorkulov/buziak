import React from 'react'
import Image from 'next/image'
import fileIcon from "@/assets/icons/file.svg"
// import micIcon from "@/assets/icons/mic.svg"
import senIcon from "@/assets/icons/send.svg"

const ChatFooter = () => {
    return (

        <div className='fixed bottom-[88px] left-0 right-0 py-2 pl-1.5 pr-5 flex items-center bg-[#100308]'>
            <label htmlFor='file' className='w-[50px] h-[50px]  flex items-center justify-center rounded-xl bg-darkgray '>
                <input type="file" id='file' className='hidden' />
                <Image src={fileIcon} width={20} height={20} alt='' />
            </label>
            <div className='ml-2 w-[calc(100%-90px)] '>
                <input type="text" className='w-full  h-[50px] rounded-[10px] bg-darkgray px-4 !outline-0 !border-0  placeholder:text-white' placeholder='Type a message...' />
            </div>
            <div className='w-10 h-10 flex items-center justify-center ml-4 bg-[#9D3670] rounded-full'>
                <Image src={senIcon} width={22} height={32} alt='' />
            </div>
        </div>
    )
}

export default ChatFooter