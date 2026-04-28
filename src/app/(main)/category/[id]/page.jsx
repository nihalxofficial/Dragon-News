import LeftSideBar from '@/components/HomePage/LeftSideBar';
import NewsCard from '@/components/HomePage/NewsCard';
import RightSideBar from '@/components/HomePage/RightSideBar';
import { getCategories, getNewsByCategory } from '@/lib/data';
import React from 'react';

export const metadata = {
  title: "Dragon News - Category Page",
};



const CategoryNews = async ({ params }) => {
    const { id } = await params;

    const loadCategories = await getCategories();
    const categories = loadCategories.data.news_category;

    const loadDataByCategory = await getNewsByCategory(id);
    const categoryNews = loadDataByCategory.data;


    return (
        <div className="grid grid-cols-4 gap-10">
            <div className="">
                <LeftSideBar categories={categories} activeId={id} />
            </div>
            <div className="col-span-2">
                <h2 className="font-bold mb-4 text-xl">News By Category</h2>
                <div className="space-y-4">
                    {categoryNews.length > 0 ? categoryNews.map(news => <NewsCard key={news._id} news={news}/>)
                :<div className='h-[40vh] flex justify-center items-center'>
                    <h2 className='text-xl'>No news found</h2>
                    </div>}
                </div>
            </div>
            <div className="">
                <RightSideBar />
            </div>
        </div>
    );
};

export default CategoryNews;