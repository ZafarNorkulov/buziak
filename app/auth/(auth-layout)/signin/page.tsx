"use client";
import AuthButton from "@/components/custom-components/buttons/auth-button";
import { Checkbox, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppleIcon from "@/assets/icons/apple.svg";
import { useAppDispatch } from "@/store";
import SignIn from "@/store/auth/service";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/google";

interface IForm {
    username: string;
    password: string;
}



const Page = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const onFinish = async (values: IForm) => {
        try {
            await dispatch(SignIn({ data: values }));
            router.push("/");
        } catch (err) {
            console.error("Login failed", err);
        }
    };

    return (
        <section className="signin h-[calc(100vh-60px)]">
            <div className="flex flex-col justify-between h-[calc(100%-80px)]">
                <div className="flex flex-col gap-[64px]">
                    <h1 className="auth-title">Login</h1>

                    <Form size="large" className="flex flex-col gap-4 " onFinish={onFinish}>
                        <Form.Item name="username" rules={[{ required: true, message: "Пожалуйста, введите Email!" }]}>
                            <Input type="email" placeholder="example@gmail.com" className="h-12" autoComplete="email" />
                        </Form.Item>

                        <Form.Item name="password" rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]} className="!mt-8">
                            <Input.Password placeholder="******" className="h-12" autoComplete="current-password" />
                        </Form.Item>

                        <Form.Item>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <AuthButton>Login</AuthButton>
                        </Form.Item>

                        <Link href="/auth/forgot-password" className="text-primary w-max mx-auto text-sm leading-[140%] font-semibold">
                            Проблемы со входом?
                        </Link>
                    </Form>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex w-max mx-auto gap-9">
                        <GoogleLogin />
                        <button className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-white">
                            <Image src={AppleIcon} width={24} height={24} alt="Apple icon" />
                        </button>
                    </div>

                    <p className="flex w-max mx-auto gap-1 text-sm text-miscellaneous leading-[140%] font-semibold">
                        Nie masz konta? <Link href={"/auth/signup"} className="text-[#006AE5]">Sing Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Page;
