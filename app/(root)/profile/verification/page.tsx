import React from 'react'
import registerGirl from "@/assets/icons/register-girl.svg"
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <div className='!mt-14 max-container !px-8'>
            <div className='flex flex-col justify-center items-center gap-8 px-6 py-8 rounded-4xl bg-[#675B78]'>
                <Image src={registerGirl} width={100} height={100} className='shadow-drop' alt='register' />
                <h2 className='text-2xl leading-[120%] font-medium font-jakarta'>Zweryfikuj swój profil</h2>
                <p className='text-sm text-center leading-[120%] font-extralight font-jakarta'>
                    Udowodnij, że jesteś osobą ze swojego profilu, przesyłając zdjęcie. Jeśli pasuje, otrzymasz weryfikację!
                </p>
                <div className="button-group flex flex-col gap-2.5 w-full">
                    <Link href={"/profile/verification/face"} className='w-full h-10 flex items-center justify-center text-xl leading-[120%] font-semibold font-jakarta text-[#F1EAEF] button-shadow button-gradient rounded-[40px]'>
                        Jestem gotowy
                    </Link>
                    <Link href={"/profile"} className='w-full h-10 flex items-center justify-center text-xl leading-[120%] font-semibold font-jakarta text-[#F1EAEF] border border-black bg-[#705a8c] rounded-[40px]'>
                        Może później
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page