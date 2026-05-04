import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-[calc(100vh-200px)] flex justify-center items-center bg-gradient-to-br from-white via-blue-50 to-sky-100">
            <div className='text-center'>
                <div className="relative inline-block">
                    <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 border-r-blue-500"></div>
                </div>
                
                <div className="mt-4 flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <h2 className='text-xl font-semibold text-gray-700 mt-4'>Loading...</h2>
                <p className='text-sm text-gray-500 mt-1'>Please wait while we fetch the latest news</p>
            </div>
        </div>
    );
};

export default LoadingPage;