import React from 'react'
import darkenBg from "@/assets/images/darken-bg.png"


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-[calc(100vh-88px)] pb-[88px] bg-top bg-no-repeat bg-cover pt-5' style={{ backgroundImage: `url(${darkenBg.src})` }}>{children}</div>
    )
}

export default Layout