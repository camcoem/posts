import { IUser } from '@/types/types';
import Link from 'next/link';

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
    <div className=" h-screen bg-main">
      <ul className="flex flex-col gap-3">
        {users.map((user) => (
          // <Link href={}>
          <li key={user.id} className="text-primary">
            {user.name ?? ''}
          </li>
          // </Link>
        ))}
      </ul>
    </div>
  );
}
