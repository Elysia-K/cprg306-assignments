import Item from './item';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="font-bold text-3xl text-white p-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
