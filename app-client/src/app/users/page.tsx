import { IUser } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';
import UserCard from '@/components/UserCard/UserCard';

const getUsers = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) {
      throw new Error('Bad Response!');
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};

export default async function Users() {
  const users: IUser[] = await getUsers();

  return (
    <div className="bg-main">
      <ul className="flex w-full flex-col flex-wrap items-center justify-center gap-3 p-5 md:flex-row">
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <UserCard user={user} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
