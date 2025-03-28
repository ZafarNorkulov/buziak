import React from 'react'
import darkenBg from "@/assets/images/darken-bg.png"
import SwiperSection from '@/components/likes-components/user/swiper-section'
import LastPost from '@/components/likes-components/user/last-post'


const LikedUsersById = () => {

    return (
        <section className="liked-user-id min-h-screen bg-top flex flex-col gap-2 bg-no-repeat bg-cover pt-[10px] px-[11px] pb-7"
            style={{ backgroundImage: `url(${darkenBg.src})` }}>
            <SwiperSection />
            <LastPost />
        </section>
    )
}

export default LikedUsersById