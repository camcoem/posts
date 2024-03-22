import { IPost } from '@/types/types';
import Post from '@/components/Post/Post';

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
          <Post
            id={post.id}
            body={post.body}
            userId={post.userId}
            title={post.title}
            key={post.id}
          />
        ))}
      </ul>
    </div>
  );
}
