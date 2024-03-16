import Link from 'next/link';

export default function Navbar() {
  return (
    <main className="min-w-screen mx-auto flex flex-row items-center gap-10 bg-secondary px-24 py-10">
      <Link
        href={'/'}
        className=" w-20 font-bold text-xl text-primary transition-all hover:tracking-widest hover:text-main"
      >
        Home
      </Link>
      <Link
        href={'/posts'}
        className="w-20 font-bold text-xl text-primary transition-all hover:tracking-widest hover:text-main "
      >
        Posts
      </Link>
      <Link
        href={'/users'}
        className="w-20 font-bold text-xl text-primary transition-all hover:tracking-widest hover:text-main "
      >
        Users
      </Link>
    </main>
  );
}
