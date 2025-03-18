import Footer from '@/components/footer'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>

            <div className='h-screen '>

                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout