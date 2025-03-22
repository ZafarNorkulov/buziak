"use client";
import AuthButton from "@/components/custom-components/buttons/auth-button";
import { Checkbox, ConfigProvider, Form, Input, Segmented } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GoogleIcon from "@/assets/icons/Google.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import { signIn, useSession } from "next-auth/react";

const SignUp = () => {
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("Man");

    const { data: session } = useSession();
    console.log(session)
    return (
        <section className="signup">
            <h1 className="auth-title">Sign Up</h1>
            <Form size="large" className="flex flex-col gap-4 !mt-5" onFinish={(e) => console.log(e)}>
                <div className="flex flex-col gap-12">
                    <Form.Item name="full_name"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваше полное имя!' }]}>
                        <Input placeholder="Enter full name" className="h-12" />
                    </Form.Item>

                    <PhoneInput
                        country={"uz"}
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
                    <Form.Item name="email" rules={[{ required: true, message: 'Пожалуйста, введите адрес электронной почты!' }]}>
                        <Input type="email" placeholder="Enter email address" className="h-12" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}>
                        <Input.Password type="password" placeholder="Enter password" className="h-12" />
                    </Form.Item>
                </div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorBgBase: "#141522",
                            colorTextBase: "#fff",
                            controlItemBgActive: "#141522"
                        },
                    }}
                >
                    <Form.Item name="gender" rules={[{ required: true, message: 'Пожалуйста, выберите пол!' }]}>
                        <Segmented<string>
                            size="large"
                            options={["Man", "Girl"]}
                            value={gender}
                            onChange={(value) => {
                                setGender(value);
                            }}
                            block
                            shape="round"
                            className={`signup-segment ${gender === "Girl" && "girl"} flex text-white font-urbanist`}
                        />
                    </Form.Item>
                </ConfigProvider>
                <Form.Item>

                    <Checkbox className="w-full" >
                        <span className="w-full flex justify-end gap-5 text-xs leading-[140%] text-miscellaneous">
                            <span>Term of Conditions</span>
                            <span>Privacy Policy</span>
                        </span>
                    </Checkbox>

                </Form.Item>

                <AuthButton>Register</AuthButton>

            </Form>
            <div className="flex flex-col gap-4 mt-4">
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
