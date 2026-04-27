import LeftSideBar from '@/components/HomePage/LeftSideBar';
import RightSideBar from '@/components/HomePage/RightSideBar';
import React from 'react';

const getCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = res.json()
    return data;
}
const getNewsByCategory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = res.json();
    return data;
}

const CategoryNews = async ({ params }) => {
    const { id } = await params;

    const loadCategories = await getCategories();
    const categories = loadCategories.data.news_category;

    const loadDataByCategory = await getNewsByCategory(id);
    const categoryNews = loadDataByCategory.data;


    return (
        <div className="grid grid-cols-4 gap-6">
            <div className="">
                <LeftSideBar categories={categories} activeId={id} />
            </div>
            <div className="col-span-2">
                <h2 className="font-bold mb-4 text-xl">Dragon News Home</h2>
                <div className="space-y-4">
                    {categoryNews.length > 0 ? categoryNews.map(news => {
                        return <div key={news._id}>
                            <h2>{news.title}</h2>
                        </div>
                    })
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