import { IPost } from '@/types/types';

export default function PostCard(props: IPost) {
  const { id, body, userId, title } = props;

  return (
    <li key={id} className="flex w-full flex-col items-start text-primary">
      <div className=" w-full rounded-full border border-secondary p-4 shadow-xl hover:bg-secondary/30">
        <div className=" ml-4 text-xl text-tertiary hover:text-tertiary/50">{title ?? ''}</div>
        <div className="ml-4 text-sm text-primary">{body ?? ''}</div>
      </div>
    </li>
  );
}
