import React from 'react'
import darkenBg from "@/assets/images/darken-bg.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-[calc(100vh-80px)] bg-top bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${darkenBg.src})` }}>{children}</div>
    )
}

export default Layout