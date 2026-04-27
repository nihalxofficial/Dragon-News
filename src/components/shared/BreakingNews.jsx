import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const news = [
        { id: 1, title: "Global Markets See Sharp Decline Amid Economic Uncertainty" },
        { id: 2, title: "New AI Technology Revolutionizes Healthcare Industry" },
        { id: 3, title: "Severe Weather Causes Disruptions Across Multiple Regions" },
    ]
    return (
        <div className='flex justify-between items-center gap-4 bg-gray-200 p-3 rounded-sm'>
            <button className='btn bg-red-600 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
               {news.map(n=> <span key={n.id} className='mr-30'>{n.title}</span>)}
            </Marquee>

        </div>
    );
};

export default BreakingNews;