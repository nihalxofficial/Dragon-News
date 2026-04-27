const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = res.json()
  return data;
}

export default async function Home() {
  const loadData = await getCategories();
  const categories = loadData.data.news_category;
  console.log(categories);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="">
        <h2 className="font-bold mb-4 text-xl">All Categories</h2>
        <ul className="flex flex-col gap-3 text-gray-400">
          {categories.map(category => <li key={category.category_id}>{category.category_name}</li>)}
        </ul>
      </div>
      <div className="col-span-2">All News</div>
      <div className="">Social Icons</div>
    </div>
  );
}
