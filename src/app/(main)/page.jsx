import LeftSideBar from "@/components/HomePage/LeftSideBar";
import RightSideBar from "@/components/HomePage/RightSideBar";

const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = res.json()
  return data;
}

export default async function Home() {
  const loadData = await getCategories();
  const categories = loadData.data.news_category;

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="">
        <LeftSideBar categories={categories}/>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold mb-4 text-xl">Dragon News Home</h2>
      </div>
      <div className="">
        <RightSideBar/>
        </div>
    </div>
  );
}
