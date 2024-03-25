import { IUser } from '@/types/types';
import Image from 'next/image';

interface IUserCard {
  user: IUser;
}

export default function UserCard(props: IUserCard) {
  const { user } = props;

  return (
    <section className="md: flex h-[483px] w-[300px] max-w-[600px] flex-col items-start gap-2 rounded-md bg-secondary/20 p-10 transition-all hover:bg-secondary/10 md:w-[300px] lg:w-[400px] lg:items-center">
      <div className="flex w-full flex-col items-center">
        <Image
          src="/images/avatarImage.jpg"
          alt="Avatar of User"
          width={80}
          height={80}
          className="rounded-full hover:ring-2 hover:ring-secondary"
        />
      </div>
      <h1 className="w-full text-center font-bold text-2xl tracking-widest text-tertiary lg:text-3xl">
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
