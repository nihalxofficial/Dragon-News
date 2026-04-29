import Image from "next/image";
import { IoShareSocial, IoStar } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import Link from "next/link";

const NewsCard = ({ news }) => {
    return (
        <Link href={`/news/${news._id}`} className="card bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="flex justify-between items-center gap-3 bg-gradient-to-r from-blue-50 to-gray-50 p-4 border-b border-gray-100">
                <div className="flex justify-between items-center gap-2">
                    <div>
                        <Image src={news.author?.img} alt="demoUser" width={40} height={40} className="rounded-full ring-2 ring-blue-200" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800">{news.author?.name}</h2>
                        <p className="text-gray-500 text-xs">{news.author?.published_date}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <FaRegBookmark className="text-lg cursor-pointer text-gray-500 hover:text-blue-600 transition-colors" />
                    <IoShareSocial className="text-xl cursor-pointer text-gray-500 hover:text-blue-600 transition-colors" />
                </div>
            </div>
            <div className="card-body p-5">
                <h2 className="card-title font-bold text-xl text-gray-800 line-clamp-2">{news.title}</h2>
                <div className="relative my-3 overflow-hidden rounded-lg">
                    <Image 
                        src={news.image_url} 
                        alt={news.title} 
                        width={400} 
                        height={250} 
                        className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">{news.details}</p>
                <Link href={`/news/${news._id}`} className="text-blue-600 -mt-1 text-md cursor-pointer font-medium hover:text-blue-700 hover:underline transition-all">
                    Read More...
                </Link>
                <div className="divider my-3 bg-gray-200 h-px"></div>
                <div className="flex justify-between items-center gap-5">
                    <div className="flex justify-between items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <IoStar key={i} className={`${i < Math.floor(news.rating.number) ? 'text-blue-500' : 'text-gray-300'} text-lg`} />
                        ))}
                        <span className="text-gray-700 font-semibold text-sm ml-1">{news.rating.number}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <IoMdEye className="text-blue-500 text-lg" />
                        <span className="text-gray-700 font-semibold text-sm">{news.total_view || 0} views</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;