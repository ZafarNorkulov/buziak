"use client"
import React, { useEffect } from 'react'
import darkenBg from "@/assets/images/darken-bg.png"
import { useAppDispatch } from '@/store';
import { fetchUser } from '@/store/user';


const Layout = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    return (
        <div className='min-h-[calc(100vh-67px)] bg-top bg-no-repeat bg-cover pt-5' style={{ backgroundImage: `url(${darkenBg.src})` }}>{children}</div>
    )
}

export default Layout