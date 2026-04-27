// import { redirect } from "next/navigation";


// export default async function Home() {


// const default_category_id = "01";
//   return (
//     redirect(`/category/${default_category_id}`)
//   );
// }



import LeftSideBar from "@/components/HomePage/LeftSideBar";
import RightSideBar from "@/components/HomePage/RightSideBar";

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

export default async function Home() {
  const loadCategories = await getCategories();
  const categories = loadCategories.data.news_category;

  const loadDataByCategory = await getNewsByCategory("01");
  const categoryNews = loadDataByCategory.data;


  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="">
        <LeftSideBar categories={categories} activeId={"01"}/>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold mb-4 text-xl">Dragon News Home</h2>
        <div className="space-y-4">
          {categoryNews.map(news => {
            return <div key={news._id}>
              <h2>{news.title}</h2>
            </div>
          })}
        </div>
      </div>
      <div className="">
        <RightSideBar />
      </div>
    </div>
  );
}
