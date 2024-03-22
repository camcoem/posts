import { IUser } from '@/types/types';
import Image from 'next/image';

interface IUserCard {
  user: IUser;
}

export default function UserCard(props: IUserCard) {
  const { user } = props;

  return (
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
  );
}
