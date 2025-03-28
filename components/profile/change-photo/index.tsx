"use client"
import React, { useCallback, useEffect, useState } from 'react'
import PhotoTab from './tab'
import PhotoCard from './card';
import instance from '@/config/axios.config';
import { IUserPhoto } from '@/types/data.models';




const ChangePhotoComponent = () => {

    const [activeTab, setActiveTab] = React.useState('tab1');
    const [photos, setPhotos] = useState<IUserPhoto[]>([]);

    const fetchUpdatedPhotos = useCallback(async () => {
        try {
            const response = await instance.get("/profile/");
            if (response.status === 200) {
                setPhotos(response.data.user_photo);
            }
        } catch (error) {
            console.error("Rasmlarni olishda xatolik:", error);
        }
    }, []);

    useEffect(() => {
        fetchUpdatedPhotos();
    }, [fetchUpdatedPhotos]);

    console.log(photos)
    // Har doim 9 ta element hosil qilish
    const filledPhotos = [...photos, ...Array(Math.max(0, 9 - photos.length)).fill(null)];
    return (
        <div className='relative '>
            <button className='absolute top-0 right-3 text-[#00BBFF] font-semibold font-jakarta leading-[120%]' onClick={() => setActiveTab("tab2")}>Done</button>
            <PhotoTab activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "tab1" ? (

                <div className='grid grid-cols-12 gap-4 mt-6'>
                    {filledPhotos.map((item, index) => (
                        <PhotoCard
                            key={index}
                            id={item?.id}
                            image={item?.photo}
                            edit={activeTab === "tab1"}
                            onUpload={fetchUpdatedPhotos}
                        />
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-12 gap-4 mt-6'>
                    {
                        photos?.map(item => (

                            <PhotoCard id={item.id} key={item.id} image={item.photo} onUpload={fetchUpdatedPhotos} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default ChangePhotoComponent