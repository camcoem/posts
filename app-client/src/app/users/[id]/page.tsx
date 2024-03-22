import { IPost, IUser } from '@/types/types';
import Image from 'next/image';
import Post from '@/components/Post/Post';

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
      <section className="flex max-w-[600px] flex-col items-start gap-2 rounded-md bg-secondary/20 p-10">
        <div className="flex w-full flex-col items-center">
          <Image
            src="/images/avatarImage.jpg"
            alt="Avatar of User"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <h1 className="w-full text-center font-bold text-4xl tracking-widest text-tertiary">
          {user.username}
        </h1>
        <p className="text-primary">aka: {user.name}</p>
        <p className="text-primary">work: {user.company.name}</p>
        <p className="text-primary">@: {user.email}</p>
        <p className="text-primary">tel: {user.phone}</p>
        <div className="text-primary">
          Address:
          <div className="pl-10">
            <p className="text-primary">{user.address.street}</p>
            <p className="text-primary">{user.address.city}</p>
            <p className="text-primary">{user.address.zipcode}</p>
          </div>
        </div>
      </section>

      {/* Posts of User */}
      <section className="flex flex-col items-start">
        <h2 className="pb-6 text-center font-bold text-2xl text-secondary">
          Posts of @{user.username}
        </h2>
        <ul className="flex flex-col gap-5">
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
      </section>
    </main>
  );
}
