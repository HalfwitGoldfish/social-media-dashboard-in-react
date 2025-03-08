export const fetchData = async () =>
{
    const response = await fetch("./data/data.json");
    const data = await response.json();
    return data;
}