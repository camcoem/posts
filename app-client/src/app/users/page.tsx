import { IUser } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';

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
      <ul className="flex w-full flex-col flex-wrap items-center justify-center gap-3 p-5 lg:flex-row">
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className="flex w-[360px] max-w-[600px] flex-col items-center gap-2 rounded-md bg-secondary/20 p-10 md:w-[600px]">
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
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
