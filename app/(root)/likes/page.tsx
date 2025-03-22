"use client"
import React, { useState } from 'react'
import sectionBg from "@/assets/images/section-screen.png";
import LikedUsers from '@/components/likes-components';
import user from "@/assets/images/user.png"
import BeauitifulTab from '@/components/custom-components/beautifulTab';


const LikesPage = () => {
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
        <section
            className="min-h-[calc(100vh-88px)] bg-top bg-no-repeat bg-cover pt-[14px]"
            style={{ backgroundImage: `url(${sectionBg.src})` }}
        >
            <div className="max-container">
                <BeauitifulTab activeTab={activeTab} setActiveTab={setActiveTab}>
                    {activeTab === "tab1" ? <LikedUsers data={data} /> : <LikedUsers data={data} />}
                </BeauitifulTab>
            </div>
        </section>

    )
}

export default LikesPage