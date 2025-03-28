"use client";

import AuthButton from "@/components/custom-components/buttons/auth-button";
import { Checkbox, ConfigProvider, Form, Input, Segmented } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import { signIn, useSession } from "next-auth/react";
import instance from "@/config/axios.config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useGetData from "@/hooks/useGetData";

interface IForm {
    username: string;
    first_name: string;
    email: string;
    gender: number;
    password: string;
    confirm_password: string;
}

const SignUp = () => {
    const [phone, setPhone] = useState("");
    const [selectedGender, setSelectedGender] = useState<number>(1);
    const [form] = Form.useForm();

    const router = useRouter();
    const { data: session } = useSession();

    // 🚀 Xatolikni tuzatish: session bo'lsa, `useEffect` ichida redirect qilish
    useEffect(() => {
        if (session?.accessToken) {
            Cookies.set("access_token", session.accessToken);
            localStorage.setItem("access_token", session.accessToken);
            router.push("/");
        }
    }, [session, router]);

    type TGender = {
        id: number;
        name: string;
    };

    const { data: gender } = useGetData<TGender[]>({
        queryKey: ["gender"],
        url: "/gender/",
    });

    useEffect(() => {
        if (gender && gender.length > 0) {
            setSelectedGender(gender[0].id); // Birinchi jinsni default qilib qo'yish
        }
    }, [gender]);

    const register = async (values: IForm) => {
        const data = { ...values, username: phone, gender: selectedGender };

        try {
            const response = await instance.post("/register/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                localStorage.setItem("access_token", response?.data?.access);
                localStorage.setItem("refresh_token", response?.data?.refresh);
                Cookies.set("access_token", response?.data?.access, { expires: 1 / 24 });

                form.resetFields();
                setPhone("");
                router.push("/");
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log("Unexpected error occurred");
            }
        }
    };

    return (
        <section className="signup">
            <h1 className="auth-title">Sign Up</h1>
            <Form
                size="large"
                form={form}
                className="flex flex-col gap-4 !mt-5"
                onFinish={register}
                initialValues={{
                    first_name: "",
                    email: "",
                    password: "",
                    gender: selectedGender,
                }}
            >
                <div className="flex flex-col gap-12">
                    <Form.Item
                        name="first_name"
                        rules={[{ required: true, message: "Пожалуйста, введите ваше полное имя!" }]}
                    >
                        <Input placeholder="Enter full name" className="h-12" />
                    </Form.Item>

                    <PhoneInput
                        country={"pl"}
                        onlyCountries={["pl"]}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputStyle={{
                            width: "82%",
                            height: "48px",
                            fontSize: "16px",
                            padding: "16px",
                            marginLeft: "18%",
                        }}
                        buttonStyle={{
                            width: "12%",
                            height: "48px",
                            marginRight: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                        }}
                    />

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "Пожалуйста, введите адрес электронной почты!" }]}
                    >
                        <Input type="email" placeholder="Enter email address" className="h-12" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
                    >
                        <Input.Password type="password" placeholder="Enter password" className="h-12" />
                    </Form.Item>
                </div>

                <ConfigProvider
                    theme={{
                        token: {
                            colorBgBase: "#141522",
                            colorTextBase: "#fff",
                            controlItemBgActive: "#141522",
                        },
                    }}
                >
                    <Form.Item
                        name="gender"
                        rules={[{ required: true, message: "Пожалуйста, выберите пол!" }]}
                    >
                        <Segmented
                            size="large"
                            options={gender ? gender.map((item) => ({ label: item.name, value: item.id })) : []}
                            value={selectedGender}
                            onChange={(value) => {
                                setSelectedGender(value);
                            }}
                            block
                            shape="round"
                            className={`signup-segment ${gender?.find((item) => item.id === selectedGender)?.name === "Girl" && "girl"
                                } flex text-white font-urbanist`}
                        />
                    </Form.Item>
                </ConfigProvider>

                <Form.Item>
                    <Checkbox className="w-full">
                        <span className="w-full flex justify-end gap-5 text-xs leading-[140%] text-miscellaneous">
                            <span>Term of Conditions</span>
                            <span>Privacy Policy</span>
                        </span>
                    </Checkbox>
                </Form.Item>

                <AuthButton>Register</AuthButton>
            </Form>

            <div className="flex flex-col gap-4 my-4">
                <div className="flex w-max mx-auto gap-9">
                    <button
                        className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-white"
                        onClick={() => signIn("google")}
                    >
                        <Image src={GoogleIcon} width={24} height={24} alt="Google icon" />
                    </button>
                    <button className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-white">
                        <Image src={AppleIcon} width={24} height={24} alt="Apple icon" />
                    </button>
                </div>

                <p className="flex w-max mx-auto gap-1 text-sm text-miscellaneous leading-[140%] font-semibold">
                    Already have an account? <Link href={"/auth/signin"} className="text-[#006AE5]">Login</Link>
                </p>
            </div>
        </section>
    );
};

export default SignUp;
