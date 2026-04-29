"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaUser, FaImage, FaEnvelope, FaLock } from 'react-icons/fa';

const RegisterPage = () => {
    const {register, handleSubmit, watch, formState: { errors },} = useForm();
    // console.log(watch("name"));
    
    const handleRegister = async (formData) => {
        const {name, photo, email, password} = formData;

        const {data, error} = await authClient.signUp.email({
            name,
            image: photo,
            email,
            password,
            
        },{
            onSuccess: (ctx) => {
                toast.success("SignUp Successful");
                redirect("/");
            }
        })
        if(error){
            toast.error(error.message)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[80vh] py-8 bg-gradient-to-br from-white via-blue-50 to-sky-100'>
            <div className='rounded-xl p-6 md:p-8 bg-white shadow-lg border border-gray-200 max-w-md w-full'>
                <div className='text-center mb-4'>
                    <div className='inline-block p-2.5 bg-blue-100 rounded-full mb-3'>
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h2 className='font-bold text-xl text-gray-800'>Create an Account</h2>
                    <p className='text-gray-500 text-xs mt-1'>Join Dragon News today</p>
                </div>
                
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
                    <div className="form-control">
                        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                            <FaUser className="text-blue-500 text-xs" />
                            Your Name
                        </label>
                        <input 
                            type="text" 
                            {...register('name', {required: "Name field is required"})} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" 
                            placeholder="Enter your name" 
                        />
                        {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                            <FaImage className="text-blue-500 text-xs" />
                            Photo URL
                        </label>
                        <input 
                            type="text" 
                            {...register('photo', {required: "Photo is required"})} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" 
                            placeholder="https://example.com/photo.jpg" 
                        />
                        {errors.photo && <p className='text-red-500 text-xs mt-1'>{errors.photo.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                            <FaEnvelope className="text-blue-500 text-xs" />
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            {...register('email', {required: "Email field is required"})} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" 
                            placeholder="john@example.com" 
                        />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                    </div>
                    
                    <div className="form-control">
                        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                            <FaLock className="text-blue-500 text-xs" />
                            Password
                        </label>
                        <input 
                            type="password" 
                            {...register('password', {required: "Password field is required"})}  
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" 
                            placeholder="Enter your password" 
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </div>
                    
                    <button 
                        type='submit' 
                        className='w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md text-sm mt-2'
                    >
                        Create Account
                    </button>
                </form>
                
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                    </div>
                </div>
                
                <div className='space-y-2'>
                    <button className='w-full cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm'>
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                    </button>
                    <button className='w-full cursor-pointer bg-gray-800 hover:bg-gray-900 text-white py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm'>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.192.69.8.57 4.765-1.587 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </button>
                </div>
                
                <p className='text-xs text-center mt-4 text-gray-600'>
                    Already have an account?{' '}
                    <Link href={"/login"} className='text-blue-600 hover:text-blue-700 font-semibold hover:underline'>
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;