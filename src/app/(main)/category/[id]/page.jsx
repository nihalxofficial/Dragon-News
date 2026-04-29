import LeftSideBar from '@/components/HomePage/LeftSideBar';
import NewsCard from '@/components/HomePage/NewsCard';
import RightSideBar from '@/components/HomePage/RightSideBar';
import { getCategories, getNewsByCategory } from '@/lib/data';
import React from 'react';
import { FaNewspaper } from 'react-icons/fa';

export const metadata = {
  title: "Dragon News - Category Page",
};

const CategoryNews = async ({ params }) => {
    const { id } = await params;

    const loadCategories = await getCategories();
    const categories = loadCategories.data.news_category;

    const loadDataByCategory = await getNewsByCategory(id);
    const categoryNews = loadDataByCategory.data;

    // Get category name for the heading
    const activeCategory = categories.find(cat => cat.category_id === id);
    const categoryName = activeCategory?.category_name || "Category";

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-10 max-w-7xl mx-auto px-4">
            {/* Left Sidebar */}
            <div className="md:col-span-1">
                <LeftSideBar categories={categories} activeId={id} />
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2">
                <div className="mb-6">
                    <h2 className="font-bold text-2xl text-gray-800 border-l-4 border-blue-600 pl-3 flex items-center gap-2">
                        <FaNewspaper className="text-blue-600" />
                        News in {categoryName}
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 ml-3">
                        Showing {categoryNews.length} {categoryNews.length <= 1 ? 'article' : 'articles'}
                    </p>
                </div>
                <div className="space-y-6">
                    {categoryNews.length > 0 ? (
                        categoryNews.map(news => <NewsCard key={news._id} news={news} />)
                    ) : (
                        <div className='h-[40vh] flex flex-col justify-center items-center bg-gray-50 rounded-lg border border-gray-200'>
                            <div className='text-6xl mb-4'>📰</div>
                            <h2 className='text-xl font-semibold text-gray-600'>No news found</h2>
                            <p className='text-gray-400 text-sm mt-2'>Try checking other categories</p>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Right Sidebar */}
            <div className="md:col-span-1">
                <RightSideBar />
            </div>
        </div>
    );
};

export default CategoryNews;