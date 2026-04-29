import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const news = [
        { id: 1, title: "Global Markets See Sharp Decline Amid Economic Uncertainty" },
        { id: 2, title: "New AI Technology Revolutionizes Healthcare Industry" },
        { id: 3, title: "Severe Weather Causes Disruptions Across Multiple Regions" },
        { id: 4, title: "Major Breakthrough in Renewable Energy Storage Announced" },
        { id: 5, title: "Space Exploration Mission Reaches New Milestone" },
    ]
    return (
        <div className='flex justify-between items-center gap-4 bg-gradient-to-r from-blue-50 via-gray-50 to-blue-50 border border-blue-200 p-3 rounded-lg shadow-sm'>
            <button className='bg-gradient-to-r whitespace-nowrap from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-all duration-200'>
                📰 Breaking News
            </button>
            <Marquee pauseOnHover={true} speed={80} gradient={false}>
                {news.map((n, index) => (
                    <span key={n.id} className='mx-8 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                        🔴 {n.title}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;