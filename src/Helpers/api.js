const api_url = "https://jsonplaceholder.typicode.com/photos";

export default async function fetchPosts() {
  const res = await fetch(api_url);
  const json = await res.json();
  return json;
}
