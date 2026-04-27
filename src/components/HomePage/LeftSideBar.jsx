"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const LeftSideBar = ({categories}) => {
    const [activeId, setActiveId] = useState("")
    const handleCategoryClick = (category) => {
        setActiveId(category.category_id)
    }
    return (
        <>
        <h2 className="font-bold mb-4 text-xl">All Categories</h2>
        <ul className="flex flex-col gap-1 text-gray-500">
          {categories.map(category => <li 
          onClick={()=>handleCategoryClick(category)} 
          key={category.category_id} 
          className={`p-4 rounded-md 
          ${activeId===category.category_id && "text-red-600 bg-red-100 font-semibold"}`}>
            <Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link>
            
            </li>)}
        </ul>
            
        </>
    );
};

export default LeftSideBar;