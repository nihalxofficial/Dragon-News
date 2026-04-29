import RightSideBar from '@/components/HomePage/RightSideBar';
import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { IoMdEye } from 'react-icons/io';
import { FaRegBookmark } from 'react-icons/fa';
import { IoShareSocial, IoStar } from 'react-icons/io5';

export const generateMetaData = async({params}) =>{
    const {id} = await params;
    const newsDetails = await getNewsDetails(id); 
    return {
        title : newsDetails.title,
        description : newsDetails.details,
    }
  
};

const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    const newsDetails = await getNewsDetails(id);    
    
    return (
        <div className='grid grid-cols-4 gap-7 max-w-7xl mx-auto px-4'>
            <div className='col-span-3'>
                <div className='mb-6'>
                    <h2 className='font-bold text-2xl text-gray-800 border-l-4 border-blue-600 pl-3 mb-3'>Dragon News</h2>
                    <Link href={"/"} className='text-blue-600 font-medium flex justify-start items-center gap-2 hover:text-blue-700 transition-colors'>
                        <FiArrowLeft className='text-lg '/>
                        Back to Home
                    </Link>
                </div>
                <div className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
                    {/* Author Section */}
                    <div className='flex justify-between items-center gap-3 bg-gradient-to-r from-blue-50 to-gray-50 p-4 border-b border-gray-200'>
                        <div className='flex justify-between items-center gap-3'>
                            <div>
                                <Image 
                                    src={newsDetails.author?.img} 
                                    alt={newsDetails.author?.name} 
                                    width={50} 
                                    height={50} 
                                    className='rounded-full ring-2 ring-blue-300'
                                />
                            </div>
                            <div>
                                <h2 className='font-semibold text-gray-800 text-lg'>{newsDetails.author?.name}</h2>
                                <p className='text-gray-500 text-sm'>{newsDetails.author?.published_date}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-3'>
                            <FaRegBookmark className='text-xl cursor-pointer text-gray-500 hover:text-blue-600 transition-colors' />
                            <IoShareSocial className='text-2xl cursor-pointer text-gray-500 hover:text-blue-600 transition-colors' />
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='relative h-96 w-full'>
                        <Image 
                            src={newsDetails?.image_url} 
                            alt={newsDetails?.title} 
                            fill
                            className='object-cover'
                            priority
                        />
                    </div>
                    
                    {/* Content Section */}
                    <div className='p-6'>
                        <h2 className='font-bold text-2xl md:text-3xl text-gray-800 mb-4 leading-tight'>{newsDetails.title}</h2>
                        
                        {/* Rating and Views Section */}
                        <div className='flex justify-between items-center mb-6 pb-4 border-b border-gray-200'>
                            <div className='flex justify-between items-center gap-3'>
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <IoStar 
                                            key={i} 
                                            className={`${i < Math.floor(newsDetails.rating?.number || 0) ? 'text-blue-500' : 'text-gray-300'} text-lg`} 
                                        />
                                    ))}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-gray-700 font-semibold'>{newsDetails.rating?.number || 0}</span>
                                    <span className='text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs font-semibold'>
                                        {newsDetails.rating?.badge || 'Good'}
                                    </span>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <IoMdEye className='text-blue-500 text-xl' />
                                <span className='text-gray-700 font-semibold'>{newsDetails.total_view || 0} views</span>
                            </div>
                        </div>
                        
                        {/* News Details */}
                        <div className='prose prose-blue max-w-none'>
                            <p className='text-gray-600 leading-relaxed text-base'>{newsDetails.details}</p>
                        </div>
                        
                        {/* Trending/Today's Pick Badge */}
                        {newsDetails.others_info && (
                            <div className='mt-4 flex gap-2'>
                                {newsDetails.others_info.is_trending && (
                                    <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold'>
                                        🔥 Trending
                                    </span>
                                )}
                                {newsDetails.others_info.is_todays_pick && (
                                    <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold'>
                                        ⭐ Today&apos;s Pick
                                    </span>
                                )}
                            </div>
                        )}
                        
                        {/* Category Button */}
                        <div className='mt-6 pt-4 border-t border-gray-200'>
                            <button className='bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md'>
                                <Link href={`/category/${newsDetails?.category_id}`} className='flex items-center justify-between gap-2'>
                                    <FiArrowLeft className='text-lg '/>
                                    All news in this Category
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <RightSideBar/>
            </div>
        </div>
    );
};

export default NewsDetailsPage;