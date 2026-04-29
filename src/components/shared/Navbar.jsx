"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImage from "@/assets/user.png"
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { LuLogOut } from 'react-icons/lu';
import { useRouter } from 'next/navigation'; 

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    }
    console.log(session);
    

    return (
        <div className='flex justify-between items-center gap-5 py-4 border-b border-gray-200'>
            <div>

            </div>
            <ul className='flex justify-between items-center gap-7 text-gray-600 font-semibold'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/carrier"}>Career</NavLink></li>
            </ul>
            <div className='flex justify-between items-center gap-3'>
                {isPending ? <span className="loading loading-dots loading-xl text-blue-600"></span>
                    : user ?
                        <div className='flex items-center gap-3'>
                            <div className='relative'>
                                <Image 
                                    src={user.image ?? userImage} 
                                    alt='userImage' 
                                    width={40} 
                                    height={40} 
                                    className='rounded-full ring-2 ring-blue-400 hover:ring-blue-600 transition-all'
                                />
                                <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
                            </div>
                            <div className='hidden sm:block text-sm'>
                                <p className='font-medium text-gray-700'>{user.name || user.email}</p>
                                <p className='text-xs text-gray-500'>Welcome back!</p>
                            </div>
                            <button 
                                onClick={handleSignOut} 
                                className='bg-gradient-to-r cursor-pointer from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md'
                            >
                                <LuLogOut className='text-lg' />
                                <span className='hidden sm:inline'>Logout</span>
                            </button>
                        </div>
                        : <button className='bg-gradient-to-r cursor-pointer from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md'>
                            <Link href={"/login"}>Login</Link>
                          </button>}
            </div>
        </div>
    );
};

export default Navbar;