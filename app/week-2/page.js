import Link from 'next/link';
import StudentInfo from './student-info';

export default function Page() {
  return (
    <main>
      <Link href="/week-3">Shopping List</Link>
      <StudentInfo />
    </main>
  );
}
