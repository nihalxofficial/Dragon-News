import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='text-center space-y-4 py-50'>
            <h2 className='text-3xl font-bold'>404 Not Found</h2>
            <p className='text-gray-600'>The page you are looking is not available now.</p>
            <Link href={"/"} className="btn bg-linear-to-r from-violet-600 to-blue-600 text-white">Back to Home</Link>
            
        </div>
    );
};

export default NotFoundPage;