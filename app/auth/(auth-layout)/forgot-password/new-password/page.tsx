"use client"
import AuthButton from '@/components/custom-components/buttons/auth-button'
import { Form, Input } from 'antd'
import React from 'react'

const NewPassword = () => {
    return (<section className="signup">
        <h1 className="auth-title">Введи новый пароль</h1>
        <Form size="large" className="flex flex-col gap-9 !mt-[54px]" onFinish={(e) => console.log(e)}>
            <Form.Item name="password" rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}>

                <Input type="text" placeholder="Новый пароль..." className="h-12" autoComplete="email" />
            </Form.Item>
            <p className='text-white font-bold opacity-90 text-xs leading-[150%] text-center'>
                Введи новый пароль который будет вам необходим при входе на сайт
            </p>
            <AuthButton redirect='/auth/signin'>Новый пароль</AuthButton>
        </Form>
    </section>
    )
}

export default NewPassword