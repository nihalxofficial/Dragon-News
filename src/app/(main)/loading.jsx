import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className='text-center'>
                <span className="loading loading-spinner loading-xl"></span>
                <h2 className='text-xl mt-2'>Loading...</h2>
            </div>
            
        </div>
    );
};

export default LoadingPage;