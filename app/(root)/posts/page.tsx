import React from 'react'
import bg from "@/assets/images/messages-screen-bg.png"
import PostsComponent from '@/components/posts'

const PostsPage = () => {
    return (
        <div className='min-h-[calc(100vh-80px)] pb-[80px] bg-top bg-no-repeat bg-cover pt-5' style={{ backgroundImage: `url(${bg.src})` }}>
            <PostsComponent />
        </div>
    )
}

export default PostsPage