const getPosts = async (): Promise<IPost[]> => {
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

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
