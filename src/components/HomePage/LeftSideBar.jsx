import Link from 'next/link';

const LeftSideBar = ({ categories, activeId }) => {

    return (
        <div className='sticky top-7'>
            <h2 className="font-bold mb-4 text-xl text-gray-800 border-l-4 border-blue-600 pl-3">All Categories</h2>
            <ul className="flex flex-col gap-1 text-gray-600">
                {categories.map(category => <li
                    key={category.category_id}
                    className={`p-3 rounded-lg transition-all duration-200 
          ${activeId === category.category_id 
              ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold border-r-4 border-blue-600 shadow-sm" 
              : "hover:bg-gray-50 hover:text-blue-600"}`}>
                    <Link href={`/category/${category.category_id}`} className='block'>{category.category_name}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default LeftSideBar;