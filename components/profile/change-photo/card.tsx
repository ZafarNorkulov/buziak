"use client";
import React from "react";
import plusIcon from "@/assets/icons/plus.svg";
import Image from "next/image";
import instance from "@/config/axios.config";

const PhotoCard = ({
    id,
    image,
    edit,
    onUpload,
}: {
    id: number;
    image: string;
    edit?: boolean;
    onUpload: () => void; // Rasm yuklanganda UI yangilash uchun
}) => {
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("photo", file);

        try {
            const response = await instance.post("/profile/photo/add/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                console.log("Rasm muvaffaqiyatli yuklandi!", response.data);
                await onUpload(); // ✅ Rasm yuklanganidan keyin qayta ma'lumotlarni olish
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Xatolik:", error.message);
            } else {
                console.error("Noma’lum xatolik yuz berdi");
            }
        }
    };


    const handleDelete = async () => {
        try {
            const response = await instance.delete(`/profile/photo/${id}/`);
            if (response.status === 204) {
                console.log("Rasm o‘chirildi!");
                await onUpload(); // O‘chirganidan keyin UI yangilash
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("O‘chirishda xatolik:", error.message);
            } else {
                console.error("Noma’lum xatolik yuz berdi");
            }
        }
    }

    return (
        <div className="col-span-4 relative bg-[#675B78] w-[113px] h-[135px] rounded-4xl transition-all ease-in">
            {image && <Image src={image} className="rounded-4xl" fill alt="gallery photo" />}
            {edit && (
                <button
                    className={`absolute ${image
                        ? "right-0 bottom-0 bg-[#3C3C3C] "
                        : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink"
                        } flex justify-center w-[22px] h-[22px] border-[3px] border-white rounded-full z-20`}
                >
                    {!image ? (
                        <label htmlFor={`file-${id}`} className="flex justify-center">
                            <input
                                type="file"
                                name="file"
                                id={`file-${id}`}
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                            <Image src={plusIcon} width={11} height={11} alt="icon" />
                        </label>
                    ) : (

                        <Image src={plusIcon} className="rotate-45" width={11} height={11} alt="icon" onClick={handleDelete} />
                    )}
                </button>
            )}
        </div>
    );
};

export default PhotoCard;
