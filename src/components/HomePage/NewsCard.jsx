import Image from "next/image";
import { IoShareSocial, IoStar } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import Link from "next/link";

const NewsCard = ({ news }) => {
    return (
        <Link href={`/news/${news._id}`} className="card bg-base-100  shadow-sm">
            <div className="flex justify-between items-center gap-3 bg-gray-50 p-4">
                <div className="flex justify-between items-center gap-2">
                    <div>
                        <Image src={news.author?.img} alt="demoUser" width={40} height={40} className="rounded-full"></Image>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">{news.author?.name}</h2>
                        <p className="text-gray-600 text-xs">{news.author?.published_date}</p>
                    </div>

                </div>
                <div className="flex justify-between items-center gap-3">
                    <FaRegBookmark className="text-lg cursor-pointer"/>
                    <IoShareSocial className="text-xl cursor-pointer" />
                </div>
            </div>
            <div className="card-body">

                <h2 className="card-title font-bold text-2xl">{news.title}</h2>
                <Image src={news.thumbnail_url} alt={news.title} width={300} height={400} className="h-100 w-full my-3"></Image>
                <p className="text-gray-600 line-clamp-4">{news.details}</p>
                <Link href={`/news/${news._id}`} className="text-orange-600 -mt-1 text-md cursor-pointer">Read More...</Link>
                <div className="divider"></div>
                <div className="flex justify-between items-center gap-5">
                    <div className="flex justify-between items-center gap-2">
                        <IoStar className="text-orange-600 text-xl"/>
                        <IoStar className="text-orange-600 text-xl"/>
                        <IoStar className="text-orange-600 text-xl"/>
                        <IoStar className="text-orange-600 text-xl"/>
                        <IoStar className="text-orange-600 text-xl"/>
                        <span className="text-gray-600 font-semibold text-lg">{news.rating.number}</span>

                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <IoMdEye className="text-xl"/>
                        <span className="text-gray-600 font-semibold text-lg">{news.total_view}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;