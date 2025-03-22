"use client";
import AuthButton from '@/components/custom-components/buttons/auth-button';
import { Form, Input } from 'antd';
import React from 'react'

const ForgotPassword = () => {
    return (
        <section className="signup">
            <h1 className="auth-title">Восстановить пароль </h1>
            <Form size="large" className="flex flex-col gap-9 !mt-[54px]" onFinish={(e) => console.log(e)}>
                <Form.Item name="email" rules={[{ required: true, message: 'Пожалуйста, введите Email!' }]}>

                    <Input type="email" placeholder="Enter email address" className="h-12" autoComplete="email" />
                </Form.Item>
                <p className='text-white font-extrabold opacity-90 text-xs leading-[150%] text-center'>
                    Введите email, связанный с вашим аккаунтом.<br />
                    Мы отправим вам ссылку для входа.
                </p>
                <AuthButton redirect='/auth/forgot-password/send-request'>Send email</AuthButton>
            </Form>
        </section>
    )
}

export default ForgotPassword