import React from 'react'
import Image from 'next/image'
import BackButton from '../../custom-components/buttons/back'
import noImage from "@/assets/images/profile-avatar.png"
import communicationIcon from "@/assets/icons/communcation.svg"
import SettingsForm from './form'
import Link from 'next/link'

const ProfileSettings = () => {
    return (
        <section >
            <div className='max-container !px-[11px] h-full '>
                <div className='flex items-start justify-between'>
                    <BackButton />
                    <div className='flex flex-col items-center gap-2'>
                        <Image src={noImage} width={90} height={90} className='border-[3px] border-white rounded-full' alt='noImage ' />
                        <Link href={"/profile/settings/change-photo"} className='px-3.5 py-1.5 bg-[#675B78] rounded-2xl'>
                            <p className='text-sm tracking-[1px] leading-none'>Change Profile Picture
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Image src={communicationIcon} alt='' />
                    </div>
                </div>
                <SettingsForm />

            </div>
        </section>
    )
}

export default ProfileSettings