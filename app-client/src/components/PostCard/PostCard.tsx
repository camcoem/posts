import { IPost } from '@/types/types';
import Link from 'next/link';

interface IPostCard {
  post: IPost;
  isUserPage?: boolean;
}

export default function PostCard(props: IPostCard) {
  const { post, isUserPage } = props;

  return (
    <li
      key={post.id}
      className="mx-auto flex w-full max-w-[1500px] flex-col items-start text-primary"
    >
      <div className=" w-full rounded-3xl border border-secondary p-4 shadow-xl hover:bg-secondary/20 lg:rounded-full">
        <div className="ml-4 text-xl font-semibold text-tertiary">{post.title ?? ''}</div>
        <div className="ml-4 text-sm text-primary">{post.body ?? ''}</div>

        {!isUserPage && (
          <Link
            href={`/users/${post.userId}`}
            className="flex w-full flex-col items-end justify-end pl-4 pt-2 lg:items-start"
          >
            <p className="p-1 font-bold text-highlight hover:underline">Go to User</p>
          </Link>
        )}
      </div>
    </li>
  );
}
