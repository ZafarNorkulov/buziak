import React from 'react'
import plusIcon from "@/assets/icons/plus.svg"
import Image from 'next/image'
// import useGetData from '@/hooks/useGetData'

const PhotoCard = ({ id, image, edit }: { id: number, image: string, edit?: boolean }) => {

    // const { data: photo } = useGetData({
    //     queryKey: ['get-gallery'],
    //     url: `/profile/photo/${id}`
    // })
    console.log(id)
    return (
        <div className='col-span-4 relative bg-[#675B78] w-[113px] h-[135px] rounded-4xl  transition-all ease-in'>
            {image && <Image src={image} fill alt='gallery photo' />}

            {/* Icon */}
            {edit && (

                <button className={`absolute ${image ? "right-0 bottom-0 bg-[#3C3C3C] rotate-45" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink"}   flex justify-center w-[22px] h-[22px] border-[3px] border-white rounded-full  z-20`}>
                    {

                        image ? (

                            <label htmlFor="file" className='flex justify-center'>
                                <input type="file" name="file" id="file" className='hidden' />
                                <Image src={plusIcon} className='' width={11} height={11} alt='icon' />
                            </label> 
                        ) : (
                            <Image src={plusIcon} className='' width={11} height={11} alt='icon' />

                        )
                    }


                </button>
            )}
        </div>
    )
}

export default PhotoCard