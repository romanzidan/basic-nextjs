import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/users">Users</Link></li>
        </ul>
      </header>
      <h1>Welcome my bro</h1>
    </>
  );
}
