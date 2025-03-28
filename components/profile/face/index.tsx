"use client"
import React, { useState, useRef, useEffect } from 'react';
import vector from "@/assets/images/vector.png";
import defaultGirl from "@/assets/images/user-default-verification.png";
import defaultMan from "@/assets/icons/boy.svg";
import Image from 'next/image';
import instance from '@/config/axios.config';
import { useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';

const FaceDetector: React.FC = () => {
    const [cameraActive, setCameraActive] = useState<boolean>(false);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { user } = useAppSelector(state => state.user);
    const router = useRouter()

    useEffect(() => {
        if (cameraActive) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                })
                .catch((err) => {
                    console.error("Kamerani yoqishda xatolik:", err);
                    setCameraActive(false);
                });
        } else {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                const tracks = stream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        }
    }, [cameraActive]);

    const handleCapture = async () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

                // Base64 formatdagi rasmni olish
                const imageData = canvas.toDataURL('image/png');

                // Base64 ni `Blob` ga o‘tkazish
                const blob = await fetch(imageData).then(res => res.blob());

                // `Blob` dan `File` yaratish
                const file = new File([blob], "captured-image.png", { type: "image/png" });

                setCapturedImage(imageData);
                setCameraActive(false);

                // **Gender asosida backend yo‘nalishini va request methodini aniqlash**
                const isGirl = user?.gender?.[0]?.name === "Girl";
                const endpoint = isGirl
                    ? "/profile/verification/girl/"
                    : "/profile/verification/boy/";
                const method = isGirl ? "put" : "post"; // Agar "Girl" bo‘lsa, PUT ishlatiladi

                // Backendga `multipart/form-data` orqali jo‘natish
                const formData = new FormData();

                if (isGirl) {
                    formData.append("verified_image", file); // Girl bo‘lsa, "verified_image" key bilan
                } else {
                    formData.append("image", file); // Boy bo‘lsa, odatdagidek "image" key bilan
                }

                try {
                    const response = await instance({
                        method,
                        url: endpoint,
                        data: formData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });

                    if (response.status === 200) {
                        router.push("/profile")
                        console.log("Profile updated successfully", response);
                    }
                } catch (error) {
                    console.error("Rasmni yuborishda xatolik", error);
                }
            }
        }
    };


    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-4 py-4 rounded-4xl bg-[#675B78]'>
                <h2 className='text-2xl leading-[120%] font-jakarta'>Przejdźmy do weryfikacji</h2>
                <div className="relative w-[165px] h-[230px] flex justify-center items-center">
                    {/* Orqa fon (Vector tasvir) */}
                    <Image src={vector} alt="vector" className="absolute object-cover w-full h-full z-10" />

                    {/* Video yoki rasm joylashgan konteyner */}
                    <div className="absolute w-[152px] h-[223px] overflow-hidden flex justify-center items-center">
                        {cameraActive ? (
                            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover rounded-full mask-video" />
                        ) : capturedImage ? (
                            <img src={capturedImage} className="w-full h-full object-cover rounded-full mask-video" alt="captured" />
                        ) : user?.gender?.[0]?.name === "Girl" ? (
                            <Image src={defaultGirl} className="w-full h-full object-cover" alt="default" />
                        ) : <Image src={defaultMan} className='absolute w-[122px] h-[137px] z-0' alt='default' />}
                    </div>
                </div>

                <p className='text-sm max-w-[227px] text-center leading-[120%] font-jakarta font-extralight'>Upewnij się, że Twoja twarz mieści się w owalnym kształcie.</p>
                {cameraActive ? (
                    <button onClick={handleCapture} className='w-[calc(100%-48px)] h-10 flex items-center justify-center text-xl leading-[120%] font-semibold font-jakarta text-[#F1EAEF] button-shadow button-gradient rounded-[40px]'>
                        Rasmga olish
                    </button>
                ) : (
                    <button onClick={() => setCameraActive(true)} className='w-[calc(100%-48px)] h-10 flex items-center justify-center text-xl leading-[120%] font-semibold font-jakarta text-[#F1EAEF] button-shadow button-gradient rounded-[40px]'>
                        Jestem gotowy
                    </button>
                )}
            </div>
        </div>
    );
}

export default FaceDetector;
