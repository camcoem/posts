import { IPost } from '@/types/types';

const getPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
      throw new Error('Bad Response!');
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};

export default async function Posts() {
  const posts: IPost[] = await getPosts();

  return (
    <div className=" bg-main">
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id} className="text-primary">
            {post.title ?? ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
