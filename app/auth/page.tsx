import React from 'react'
import AuthButton from '@/components/buttons/auth-button'
import Image from 'next/image'
import bg from "@/assets/images/messages-screen-bg.png";
import logo from "@/public/buziak.png"
import banner from "@/assets/images/home-phone.png"

const page = () => {
    return (
        <div className="relative h-screen bg-top bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="max-container">

                <Image src={logo} className="max-h-[110px]" alt="" />
                <Image src={banner} className=" -mt-[15%] object-cover w-[390px] h-[333px]" alt="" />

                <p className="text-white text-xs leading-[150%] tracking-[-3%] text-center ">
                    <span className="font-extrabold">Buziak</span> to otwarte, szczere randki bez wstydu. To miejsce, w którym możesz tworzyć (i łamać) własne zasady, spotykać się, bawić i źle zachowywać. <span className="font-extrabold">Buziak</span> pomaga uciec od przewidywalności i nudy współczesnych randek i wybrać coś bardziej ekscytującego i hedonistycznego. To miejsce, w którym wszyscy możemy odkrywać i bezpiecznie się oddawać, preferując otwarte, intrygujące połączenia oparte na wzajemnym szacunku.
                </p>
                <div className="flex flex-col gap-5 mt-5">
                    <AuthButton redirect="/auth/signup">Register</AuthButton>
                    <AuthButton disabled={true} redirect='/auth/signin'>Login</AuthButton>
                </div>
            </div>
        </div>
    )
}

export default page