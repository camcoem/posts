import { IUser } from '@/types/types';

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

export default async function UserWithId({ params }: { params: { id: string } }) {
  const user: IUser = await getUser(params.id);

  return (
    <main className="flex min-h-screen flex-col items-start bg-main p-24">
      <h1 className="text-primary">{user.name}</h1>
      <h1 className="text-primary">Hola {user.name}</h1>
    </main>
  );
}
