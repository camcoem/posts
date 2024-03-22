import { IPost } from '@/types/types';
import PostCard from '@/components/PostCard/PostCard';

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
    <div className=" bg-main p-6">
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}
