export const getCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = res.json()
    return data;
}
export const getNewsByCategory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = res.json();
    return data;
}