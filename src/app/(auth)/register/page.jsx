"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {register, handleSubmit, watch, formState: { errors },} = useForm();
    // console.log(watch("name"));
    
    const handleRegister = async (formData) => {
        const {name, photo, email, password} = formData;

        const {data, error} = await authClient.signUp.email({
            name,
            photo,
            email,
            password,
        })
        console.log(data);  
    }
    return (
        <div className='flex justify-center items-center py-20 min-h-[80vh] bg-slate-100'>
            <div className='rounded-xl p-15 bg-white'>
                <h2 className='font-bold text-2xl text-center '>Register your account</h2>
                <div className='divider'></div>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input type="text" {...register('name', {required: "Name field is required"})} className="input bg-gray-100" placeholder="Enter your name" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" {...register('photo', {required: "Photo is required"})} className="input bg-gray-100" placeholder="Insert your photo url" />
                        {errors.name && <p className='text-red-600'>{errors.photo.message}</p>}

                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" {...register('email', {required: "Email field is required"})} className="input bg-gray-100" placeholder="john@gmail.com" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" {...register('password', {required: "Password field is required"})}  className="input bg-gray-100" placeholder="Enter your password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        <button type='submit' className='btn bg-red-600 text-white w-full mt-4'>Register</button>
                    </fieldset>
                </form>
                <h2 className='text-xs text-center mt-3'>Already have an account? <Link href={"/login"} className='text-red-600'>Login</Link> </h2>
            </div>


        </div>
    );
};

export default RegisterPage;