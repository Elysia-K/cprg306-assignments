import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="./week-2">this is the link for week2 assignments</Link>
      </p>
      <p>
        <Link href="./week-3">Shopping List</Link>
      </p>
    </main>
  );
}
