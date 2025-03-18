import React from 'react'
import sectionBg from "@/assets/images/section-screen.png";
import LikesTab from '@/components/likes-components/tab';

const LikesPage = () => {
    return (
        <section className="home h-full bg-top bg-no-repeat bg-cover pt-[14px]" style={{ backgroundImage: `url(${sectionBg.src})` }} >
            <div className="max-container">
                <LikesTab />
            </div>


        </section>
    )
}

export default LikesPage