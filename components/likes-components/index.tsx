import React from 'react';
import LikedCard from './card';
import { Skeleton } from 'antd';
import { StaticImageData } from 'next/image';


interface ILikedUsersProps {
    id: number,
    img: StaticImageData
}

const LikedUsers = ({ data }: { data: ILikedUsersProps[] }) => {


    const getHeight = (index: number) => {
        const pattern = [239, 182, 182, 239, 239, 182, 182, 239];
        return pattern[index % pattern.length];
    };

    const getMarginTop = (index: number) => {
        if (index === 0 || index % 4 === 0) return 0;
        return getHeight(index) === 239 ? -57 : 0;
    };

    return (
        <div className="mx-auto">
            <div className="flex flex-wrap gap-x-[10px] ">
                {data ? (data.map((item, index) => (

                    <LikedCard
                        key={item.id}
                        img={item.img}
                        style={{
                            height: `${getHeight(index)}px`,
                            marginTop: `${getMarginTop(index)}px`
                        }}
                    />
                ))) : <>
                    <Skeleton active className='!w-[calc(50%-5px)] mb-4 rounded-2xl p-4 border border-white/10' />
                    <Skeleton active className='!w-[calc(50%-5px)] mb-4 rounded-2xl p-4 border border-white/10' />
                    <Skeleton active className='!w-[calc(50%-5px)] mb-4 rounded-2xl p-4 border border-white/10' />
                    <Skeleton active className='!w-[calc(50%-5px)] mb-4 rounded-2xl p-4 border border-white/10' />
                    <Skeleton active className='!w-[calc(50%-5px)] mb-4 rounded-2xl p-4 border border-white/10' />
                    <Skeleton active className='!w-[calc(50%-5px)] mb-4 rounded-2xl p-4 border border-white/10' />
                </>

                }
            </div>
        </div >
    );
};

export default LikedUsers;
