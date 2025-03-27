"use client";
import AuthButton from '@/components/custom-components/buttons/auth-button';
import instance from '@/config/axios.config';
import { Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'


interface IForm {
    email: string
}

const ForgotPassword = () => {
    const router = useRouter()
    const [form] = Form.useForm()

    const onFinish = async (values: IForm) => {
        console.log(values)
        try {

            const response = await instance.post("/reset/password/", values, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 200) {
                console.log(response)
                form.resetFields()
                router.push("/auth/forgot-password/send-request")
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
            <h1 className="auth-title">Восстановить пароль </h1>
            <Form size="large" className="flex flex-col gap-9 !mt-[54px]" onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: 'Пожалуйста, введите Email!' }]}>

                    <Input type="email" placeholder="Enter email address" className="h-12" autoComplete="email" />
                </Form.Item>
                <p className='text-white font-extrabold opacity-90 text-xs leading-[150%] text-center'>
                    Введите email, связанный с вашим аккаунтом.<br />
                    Мы отправим вам ссылку для входа.
                </p>
                <AuthButton>Send email</AuthButton>
            </Form>
        </section>
    )
}

export default ForgotPassword