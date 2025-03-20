import React from 'react'
import bg from "@/assets/images/messages-screen-bg.png"
import SwiperSection from '@/components/likes-components/user/swiper-section'


const LikedUsersById = ({ params }: { params: Promise<{ user_id: string }> }) => {

    return (
        <section className="liked-user-id min-h-screen bg-top bg-no-repeat bg-cover pt-[10px] px-[5px]"
            style={{ backgroundImage: `url(${bg.src})` }}>
            <SwiperSection />
        </section>
    )
}

export default LikedUsersById