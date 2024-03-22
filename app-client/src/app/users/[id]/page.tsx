import { IPost, IUser } from '@/types/types';
import Image from 'next/image';
import PostCard from '@/components/Post/PostCard';
import UserCard from '@/components/UserCard/UserCard';

const getUser = async (id: string) => {
  try {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!userRes.ok) {
      throw new Error('Bad Response!');
    }

    return await userRes.json();
  } catch (err) {
    throw err;
  }
};
const getUserPosts = async (id: string) => {
  try {
    const userRes = await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);

    if (!userRes.ok) {
      throw new Error('Bad Response!');
    }

    return await userRes.json();
  } catch (err) {
    throw err;
  }
};

export default async function UserWithId({ params }: { params: { id: string } }) {
  const user: IUser = await getUser(params.id);
  const posts: IPost[] = await getUserPosts(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 bg-main p-10">
      {/* User Info */}
      <UserCard user={user} />

      {/* Posts of User */}
      <section className="flex flex-col items-start">
        <h2 className="pb-6 text-center font-bold text-2xl text-secondary">
          Posts of @{user.username}
        </h2>
        <ul className="flex flex-col gap-5">
          {posts.map((post) => (
            <PostCard post={post} key={post.id} isUserPage={true} />
          ))}
        </ul>
      </section>
    </main>
  );
}
