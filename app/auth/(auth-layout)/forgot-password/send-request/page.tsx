import AuthButton from '@/components/custom-components/buttons/auth-button'
import React from 'react'

const SendRequestPage = () => {
    return (
        <section className="signup">
            <h1 className="auth-title">Восстановить пароль </h1>
            <div className='flex flex-col gap-9 mt-[100px]'>
                <div className='flex flex-col w-full text-center items-center justify-center text-xs font-bold leading-[150%] -tracking-[3%] text-white opacity-90'>
                    <p>Проверьте вашу почту!
                    </p>
                    <p >Мы отправили ссылку на testmail@gmail.com, чтобы помочь вам снова войти в аккаунт. Проверьте почту и следуйте инструкциям.</p>
                </div>
                <AuthButton redirect='/auth/forgot-password/new-password'>Login</AuthButton>
            </div>
        </section>
    )
}

export default SendRequestPage