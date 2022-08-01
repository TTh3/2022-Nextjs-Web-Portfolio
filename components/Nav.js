import Link from 'next/link';
export default function Nav() {
  return (
    <nav
      className={
        'w-5/6 m-4 mx-auto flex justify-between p-6 rounded-xl bg-slate-200'
      }
    >
      {/* Check this out: https://webgradients.com/ */}
      <h1 className="font-semibold">Jsilverio.</h1>
      <div className="nav_links flex space-x-3">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
        <Link href="/">
          <a>Services</a>
        </Link>
        <Link href="/">
          <button>Contact</button>
        </Link>
      </div>
    </nav>
  );
}
