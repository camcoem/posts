import Link from 'next/link';

export default function Navbar() {
  return (
    <main className="min-w-screen mx-auto flex flex-row items-center justify-between gap-10 bg-secondary px-4 py-10 sm:justify-start lg:px-24">
      <Link
        href={'/'}
        aria-current="page"
        className=" w-20 font-bold text-xl text-primary transition-all hover:tracking-widest hover:text-main"
      >
        Home
      </Link>
      <Link
        href={'/posts'}
        aria-current="page"
        className="w-20 font-bold text-xl text-primary transition-all hover:tracking-widest hover:text-main "
      >
        Posts
      </Link>
      <Link
        href={'/users'}
        aria-current="page"
        className="w-20 font-bold text-xl text-primary transition-all hover:tracking-widest hover:text-main "
      >
        Users
      </Link>
    </main>
  );
}
