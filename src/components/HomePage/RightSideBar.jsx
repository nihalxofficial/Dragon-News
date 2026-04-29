"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
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
    return (
        <div className='sticky top-10'>
            <h2 className="font-bold mb-4 text-xl">Login With</h2>
            <div className='space-y-3'>
                <button onClick={handleGoogleSignIn} className='btn flex justify-center items-center gap-2 w-full'><FcGoogle className='text-lg' />Login with Google</button>
                <button onClick={handleGithubSignIn} className='btn flex justify-center items-center gap-2 w-full'><FaGithub className='text-lg' />Login with Github</button>
            </div>


        </div>
    );
};

export default RightSideBar;