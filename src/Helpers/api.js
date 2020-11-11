const api_url = "https://jsonplaceholder.typicode.com/";

export const config = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  retry: false
};

async function getResource(link) {
  const res = await fetch(link);
  if (!res.ok) throw new Error(res.statusText);

  const json = await res.json();
  return json;
}

export default async function fetchPosts() {
  return getResource(api_url + "photos");
}

export async function fetchPost(key, postId) {
  return getResource(api_url + "posts/" + postId);
}
