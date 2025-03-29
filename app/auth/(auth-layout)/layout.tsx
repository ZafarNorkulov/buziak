import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='bg-[#1b1b1b] min-h-screen w-screen text-white pt-10 pb-5 auth-layout'>
            <div className="max-container !h-full">
                {children}
            </div>
        </div>
    )
}

export default Layout