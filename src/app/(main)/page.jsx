// import { redirect } from "next/navigation";


// export default async function Home() {


// const default_category_id = "01";
//   return (
//     redirect(`/category/${default_category_id}`)
//   );
// }



import LeftSideBar from "@/components/HomePage/LeftSideBar";
import NewsCard from "@/components/HomePage/NewsCard";
import RightSideBar from "@/components/HomePage/RightSideBar";
import { getCategories, getNewsByCategory } from "@/lib/data";


export default async function Home() {
  const loadCategories = await getCategories();
  const categories = loadCategories.data.news_category;

  const loadDataByCategory = await getNewsByCategory("01");
  const categoryNews = loadDataByCategory.data;


  return (
    <div className="grid grid-cols-4 gap-10">
      <div className="">
        <LeftSideBar categories={categories} activeId={"01"}/>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold mb-4 text-xl">Dragon News Home</h2>
        <div className="space-y-4">
          {categoryNews.map(news => <NewsCard key={news._id} news={news}/>)}
        </div>
      </div>
      <div className="">
        <RightSideBar />
      </div>
    </div>
  );
}
