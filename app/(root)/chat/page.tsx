import React from 'react'
import sectionBg from "@/assets/images/messages-screen-bg.png";


const Chat = () => {
    return (
        <section
            className="min-h-[calc(100vh-88px)] bg-top bg-no-repeat bg-cover pt-[14px]"
            style={{ backgroundImage: `url(${sectionBg.src})` }}
        >Chat</section>
    )
}

export default Chat