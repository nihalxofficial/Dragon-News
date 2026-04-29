"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaNewspaper, FaUsers, FaTrophy } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightSideBar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }
    
    const handleFacebookSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "facebook"
        })
    }
    
    return (
        <div className='sticky top-7 space-y-6'>
            <div className='bg-white rounded-lg border border-gray-200 p-4 shadow-sm'>
                <h2 className="font-bold mb-4 text-xl text-gray-800 border-l-4 border-blue-600 pl-3">Login With</h2>
                <div className='space-y-3'>
                    <button onClick={handleGoogleSignIn} className='btn flex justify-center items-center gap-2 w-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200'>
                        <FcGoogle className='text-xl' />Login with Google
                    </button>
                    <button onClick={handleGithubSignIn} className='btn flex justify-center items-center gap-2 w-full bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-200'>
                        <FaGithub className='text-xl' />Login with Github
                    </button>
                    <button onClick={handleFacebookSignIn} className='btn flex justify-center items-center gap-2 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200'>
                        <FaFacebook className='text-xl' />Login with Facebook
                    </button>
                </div>
            </div>
            
            
            
            <div className='bg-white rounded-lg border border-gray-200 p-4 shadow-sm'>
                <h2 className="font-bold mb-4 text-gray-800 border-l-4 border-blue-600 pl-3 flex items-center gap-2">
                    <FaNewspaper className="text-blue-600" />
                    Popular Categories
                </h2>
                <div className='flex flex-wrap gap-2'>
                    <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors cursor-pointer'>Technology</span>
                    <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors cursor-pointer'>Sports</span>
                    <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors cursor-pointer'>Business</span>
                    <span className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors cursor-pointer'>Health</span>
                </div>
            </div>
            
            <div className='bg-gradient-to-br from-blue-50 to-sky-100 rounded-lg border border-blue-200 p-4 shadow-sm'>
                <h2 className="font-bold mb-3 text-gray-800 flex items-center gap-2">
                    <FaUsers className="text-blue-600" />
                    Subscribe to Newsletter
                </h2>
                <p className='text-sm text-gray-600 mb-3'>Get the latest news in your inbox</p>
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    className='w-full p-2 rounded-lg border border-gray-300 mb-2 focus:outline-none focus:border-blue-500'
                />
                <button className='w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;