"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleLogin = async(formData) => {
        const {email, password} = formData;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        })
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center min-h-[80vh] py-20 bg-slate-100'>
            <div className='rounded-xl p-15 bg-white'>
                <h2 className='font-bold text-2xl text-center '>Login your account</h2>
                <div className='divider'></div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" {...register('email', { required: "Email field is required" })} className="input bg-gray-100" placeholder="john@gmail.com" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" {...register('password', { required: "Password field is required" })} className="input bg-gray-100" placeholder="Enter your password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <button type='submit' className='btn bg-red-600 text-white w-full mt-4'>Login</button>
                    </fieldset>
                </form>
                <h2 className='text-xs text-center mt-3'>Don&apos;t have an account? <Link href={"/register"} className='text-red-600'>Register</Link> </h2>
            </div>


        </div>
    );
};

export default LoginPage;