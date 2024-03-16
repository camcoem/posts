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
    <div className=" bg-main p-6">
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.id} className="flex w-full flex-col items-start text-primary">
            <div className=" w-full rounded-full border border-secondary p-4 shadow-xl hover:bg-secondary/30">
              <div className=" ml-4 text-xl text-tertiary hover:text-tertiary/50">
                {post.title ?? ''}
              </div>
              <div className="ml-4 text-sm text-primary">{post.body ?? ''}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
