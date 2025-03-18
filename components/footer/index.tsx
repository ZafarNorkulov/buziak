"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useState } from 'react';


const Footer = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const pathname = usePathname()
    return (
        <footer className='h-[88px] fixed bottom-0 left-0 right-0 bg-[#0F0307] flex justify-between items-center'>
            {footerIcons.map((icon, idx) => (
                <div
                    key={idx}
                    className={`flex-1 h-full flex items-center justify-center cursor-pointer footer-icon ${activeIndex === idx || pathname === icon.location ? "active" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                >
                    <Link href={icon.location}>
                    {icon.svg}
                    </Link>
                </div>
            ))}
        </footer>
    );
};

export default Footer;


interface IFooterIconProps {
    svg: ReactNode;
    location: string;
    alt: string;
}

export const footerIcons: IFooterIconProps[] = [
    {
        svg: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.375 3V21" stroke="#675B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.375 3H8.375C7.27043 3 6.375 3.89543 6.375 5V19C6.375 20.1046 7.27043 21 8.375 21H16.375C17.4796 21 18.375 20.1046 18.375 19V5C18.375 3.89543 17.4796 3 16.375 3Z" fill="#675B78" stroke="#675B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.375 3V21" stroke="#675B78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ,
        location: "/",
        alt: "Slide"
    },
    {
        svg: <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.037 0.101562C14.1365 0.101562 12.4355 1.02556 11.375 2.44306C10.3145 1.02556 8.6135 0.101562 6.713 0.101562C3.4895 0.101562 0.875 2.72656 0.875 5.97106C0.875 7.22056 1.0745 8.37556 1.421 9.44656C3.08 14.6966 8.1935 17.8361 10.724 18.6971C11.081 18.8231 11.669 18.8231 12.026 18.6971C14.5565 17.8361 19.67 14.6966 21.329 9.44656C21.6755 8.37556 21.875 7.22056 21.875 5.97106C21.875 2.72656 19.2605 0.101562 16.037 0.101562Z" fill="#675B78" />
        </svg>
        ,
        location: "/likes",
        alt: "Heart"
    },
    {
        svg: <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 22.5H7.5C7.224 22.5 7 22.724 7 23C7 23.276 7.224 23.5 7.5 23.5H10.5C10.776 23.5 11 23.276 11 23C11 22.724 10.776 22.5 10.5 22.5Z" fill="#675B78" />
            <path d="M22.086 5.5H22.083L17.5 5.53V2.29C17.5 1.303 16.697 0.5 15.71 0.5H2.29C1.303 0.5 0.5 1.303 0.5 2.29V23.71C0.5 24.697 1.303 25.5 2.29 25.5H15.71C16.697 25.5 17.5 24.697 17.5 23.71V16.467L22.086 16.414C22.866 16.414 23.5 15.78 23.5 15V6.914C23.5 6.134 22.866 5.5 22.086 5.5ZM11.191 1.5L10.691 2.5H7.309L6.809 1.5H11.191ZM16.5 23.71C16.5 24.146 16.146 24.5 15.71 24.5H2.29C1.854 24.5 1.5 24.146 1.5 23.71V2.29C1.5 1.854 1.854 1.5 2.29 1.5H5.691L6.553 3.224C6.638 3.393 6.811 3.5 7 3.5H11C11.189 3.5 11.362 3.393 11.447 3.224L12.309 1.5H15.71C16.146 1.5 16.5 1.854 16.5 2.29V5.537L9 5.586C8.22 5.586 7.586 6.22 7.586 7V15.086C7.586 15.866 8.22 16.5 9 16.5H10.586V19C10.586 19.194 10.698 19.371 10.874 19.453C10.941 19.485 11.014 19.5 11.086 19.5C11.201 19.5 11.315 19.46 11.406 19.384L14.869 16.498L16.499 16.479L16.5 23.71ZM22.5 15C22.5 15.229 22.314 15.414 22.08 15.414L14.68 15.5C14.565 15.501 14.454 15.542 14.366 15.616L11.586 17.933V16C11.586 15.724 11.362 15.5 11.086 15.5H9C8.771 15.5 8.586 15.314 8.586 15.086V7C8.586 6.771 8.772 6.586 9.003 6.586L22.087 6.5C22.315 6.5 22.5 6.686 22.5 6.914V15Z" fill="#675B78" stroke="#675B78" strokeWidth="0.5" />
            <path d="M10.5 9H13C13.276 9 13.5 8.776 13.5 8.5C13.5 8.224 13.276 8 13 8H10.5C10.224 8 10 8.224 10 8.5C10 8.776 10.224 9 10.5 9Z" fill="#675B78" />
            <path d="M17.5 11H20.5C20.776 11 21 10.776 21 10.5C21 10.224 20.776 10 20.5 10H17.5C17.224 10 17 10.224 17 10.5C17 10.776 17.224 11 17.5 11Z" fill="#675B78" />
            <path d="M20.5 8H14.5C14.224 8 14 8.224 14 8.5C14 8.776 14.224 9 14.5 9H20.5C20.776 9 21 8.776 21 8.5C21 8.224 20.776 8 20.5 8Z" fill="#675B78" />
            <path d="M16 10H10.5C10.224 10 10 10.224 10 10.5C10 10.776 10.224 11 10.5 11H16C16.276 11 16.5 10.776 16.5 10.5C16.5 10.224 16.276 10 16 10Z" fill="#675B78" />
            <path d="M10.5 13H13.5C13.776 13 14 12.776 14 12.5C14 12.224 13.776 12 13.5 12H10.5C10.224 12 10 12.224 10 12.5C10 12.776 10.224 13 10.5 13Z" fill="#675B78" />
            <path d="M20.5 12H15.5C15.224 12 15 12.224 15 12.5C15 12.776 15.224 13 15.5 13H20.5C20.776 13 21 12.776 21 12.5C21 12.224 20.776 12 20.5 12Z" fill="#675B78" />
        </svg>
        ,
        location: "",
        alt: "Posts"
    },
    {
        svg: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.375 19H8.875C4.875 19 2.875 18 2.875 13V8C2.875 4 4.875 2 8.875 2H16.875C20.875 2 22.875 4 22.875 8V13C22.875 17 20.875 19 16.875 19H16.375C16.065 19 15.765 19.15 15.575 19.4L14.075 21.4C13.415 22.28 12.335 22.28 11.675 21.4L10.175 19.4C10.015 19.18 9.645 19 9.375 19Z" fill="#675B78" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.8715 11H16.8804H16.8715Z" fill="#D9D9D9" />
            <path d="M16.8715 11H16.8804" stroke="#0F080A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.8705 11H12.8795H12.8705Z" fill="#D9D9D9" />
            <path d="M12.8705 11H12.8795" stroke="#0F080A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.86951 11H8.87849H8.86951Z" fill="#D9D9D9" />
            <path d="M8.86951 11H8.87849" stroke="#0F080A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        ,
        location: "",
        alt: "Messages"
    },
    {
        svg: <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.785 10.87C12.685 10.86 12.565 10.86 12.455 10.87C10.075 10.79 8.185 8.84 8.185 6.44C8.185 3.99 10.165 2 12.625 2C15.075 2 17.065 3.99 17.065 6.44C17.055 8.84 15.165 10.79 12.785 10.87Z" fill="#675B78" />
            <path d="M7.785 14.56C5.365 16.18 5.365 18.82 7.785 20.43C10.535 22.27 15.045 22.27 17.795 20.43C20.215 18.81 20.215 16.17 17.795 14.56C15.055 12.73 10.545 12.73 7.785 14.56Z" fill="#675B78" />
        </svg>
        ,
        location: "",
        alt: "profile"
    },
]
