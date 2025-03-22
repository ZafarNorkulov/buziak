import React from 'react'
import sectionBg from "@/assets/images/section-screen.png";
import LikedComponent from '@/components/likes-components';




const LikesPage = () => {

    return (
        <section
            className="min-h-[calc(100vh-88px)] bg-top bg-no-repeat bg-cover pt-[14px]"
            style={{ backgroundImage: `url(${sectionBg.src})` }}
        >
            <div className="max-container">
                <LikedComponent />
            </div>
        </section>

    )
}

export default LikesPage