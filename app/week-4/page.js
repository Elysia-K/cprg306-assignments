'use client';

import Counter from './new-item.js';

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  return <main>{showForm && <ItemForm />}</main>;
}
