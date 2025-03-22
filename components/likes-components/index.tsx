"use client"
import React, { useState } from 'react'
import LikesTab from './tab'
import LikedUsers from '@/components/likes-components/user';
import user from "@/assets/images/user.png"

const LikedComponent = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const data = [
        { id: 1, title: 'Card 1', img: user },
        { id: 2, title: 'Card 2', img: user },
        { id: 3, title: 'Card 3', img: user },
        { id: 4, title: 'Card 4', img: user },
        { id: 5, title: 'Card 5', img: user },
        { id: 6, title: 'Card 6', img: user },
    ];


    return (
        <LikesTab activeTab={activeTab} setActiveTab={setActiveTab}>
            {activeTab === "tab1" ? <LikedUsers data={data} /> : <LikedUsers data={data} />}
        </LikesTab>
    )
}

export default LikedComponent