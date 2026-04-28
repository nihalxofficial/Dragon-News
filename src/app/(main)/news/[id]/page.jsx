import RightSideBar from '@/components/HomePage/RightSideBar';
import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

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
        <div className='grid grid-cols-4 gap-7 '>
            <div className='col-span-3'>
                <h2 className='font-bold text-xl mb-4'>Dragon News</h2>
                <Link href={"/"} className='text-red-600 font-semibold flex justify-start items-center gap-2'><FiArrowLeft className='text-lg '/>Back to Home</Link>
                <div className='p-5 shadow'>
                    <div>
                        <Image src={newsDetails?.image_url} alt={newsDetails?.title} height={600} width={700} className='w-full'></Image>
                    </div>
                    <h2 className='font-bold text-2xl my-5 leading-loose'>{newsDetails.title}</h2>
                    <p className='text-gray-600 leading-relaxed'>{newsDetails.details}</p>
                    <button  className='btn bg-red-600 text-white mt-5 '><Link href={`/category/${newsDetails?.category_id}`} className='flex items-center justify-between gap-2'><FiArrowLeft className='text-lg '/>All news in this Category</Link></button>
                </div>

            </div>
            <div>
                <RightSideBar/>
            </div>
           
        </div>
    );
};

export default NewsDetailsPage;