import React from 'react'
import bg from "@/assets/images/messages-screen-bg.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-[calc(100vh-80px)] pb-[80px] bg-top bg-no-repeat bg-cover pt-5' style={{ backgroundImage: `url(${bg.src})` }}>{children}</div>
    )
}

export default Layout