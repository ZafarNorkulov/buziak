"use client"
import React, { useEffect } from 'react'
import PhotoTab from './tab'
import PhotoCard from './card';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchProfile } from '@/store/user';



const ChangePhotoComponent = () => {

    const [activeTab, setActiveTab] = React.useState('tab1');
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchProfile()); // ✅ API-dan profilni yuklash
    }, [dispatch]);
    console.log(user)
    return (
        <div className='relative '>
            <button className='absolute top-0 right-3 text-[#00BBFF] font-semibold font-jakarta leading-[120%]'>Done</button>
            <PhotoTab activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='grid grid-cols-12 gap-4 mt-6'>
                {
                    user?.user_photo?.map(item => (

                        <PhotoCard id={item.id} key={item.id} image={item.photo} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChangePhotoComponent