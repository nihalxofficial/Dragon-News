import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100 border-b border-gray-200 py-8 px-4 shadow-sm'>
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl'></div>
                <div className='absolute bottom-0 left-0 w-80 h-80 bg-sky-200 rounded-full filter blur-3xl'></div>
            </div>
            
            <div className='relative z-10 text-center space-y-4 max-w-4xl mx-auto'>
                <div className='transform hover:scale-105 transition-transform duration-300'>
                    <Image
                        src={logo}
                        width={250}
                        height={150}
                        alt='logo'
                        className='mx-auto'
                    />
                </div>
                
                <div className='space-y-3'>
                    <div className='relative'>
                        <p className='text-blue-600 font-semibold tracking-wide text-sm uppercase flex items-center justify-center gap-2'>
                            <span className='w-8 h-px bg-blue-300'></span>
                            Journalism Without Fear or Favour
                            <span className='w-8 h-px bg-blue-300'></span>
                        </p>
                    </div>
                    
                    <div className='flex items-center justify-center space-x-3 text-sm'>
                        <div className='flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg shadow-sm'>
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className='text-gray-600 font-medium'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</span>
                        </div>
                        
                        <div className='flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg shadow-sm'>
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='text-gray-600 font-medium'>{format(new Date(), "h:mm a")}</span>
                        </div>
                    </div>
                    
                    {/* Decorative divider */}
                    <div className='flex justify-center items-center gap-2 pt-2'>
                        <div className='w-12 h-px bg-gray-300'></div>
                        <div className='w-1 h-1 rounded-full bg-blue-400'></div>
                        <div className='w-12 h-px bg-gray-300'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;