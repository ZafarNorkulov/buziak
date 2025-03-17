"use client";
import { SessionProvider } from 'next-auth/react';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#1b1b1b] min-h-screen w-screen text-white pt-10 auth-layout'>
            <div className="max-container">
                <SessionProvider>

                    {children}
                </SessionProvider>
            </div>
        </div>
    )
}

export default Layout