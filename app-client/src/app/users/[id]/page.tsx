import { IPost, IUser } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

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
    <main className="flex min-h-screen flex-col  gap-20 bg-main p-10">
      {/* User Info */}
      <section className="flex flex-col items-center">
        {/*<Image src={} alt={} />*/}
        <h1 className="w-full text-center font-bold text-4xl tracking-widest text-tertiary">
          {user.username}
        </h1>
        <p className="text-primary">{user.name}</p>
        <p className="text-primary">{user.company.name}</p>
        <p className="text-primary">{user.email}</p>
        <p className="text-primary">{user.phone}</p>
        <div className="text-primary">
          Address:
          <p className="text-primary">{user.address.street}</p>
          <p className="text-primary">{user.address.city}</p>
          <p className="text-primary">{user.address.zipcode}</p>
        </div>
      </section>

      {/* Posts of User */}
      <section className="flex flex-col items-start">
        <h2 className="pb-6 text-center font-bold text-2xl text-secondary">
          Posts of @{user.username}
        </h2>
        <ul className="flex flex-col gap-5">
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
      </section>
    </main>
  );
}
