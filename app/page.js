import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="./week-2">Week-2 Assignments</Link>
      </p>
      <p>
        <Link href="./week-3">Week-3 Shopping List</Link>
      </p>
      <p>
        <Link href="./week-4">Week-4 Assignments</Link>
      </p>
      <p>
        <Link href="./week-5">Week-5 Assignments</Link>
      </p>
    </main>
  );
}
