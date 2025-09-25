import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Diferencial
        </Link>
        <nav>
          <Link href="/internacional" className="mr-4">Internacional</Link>
          <Link href="/nacional" className="mr-4">Nacional</Link>
          <Link href="/local" className="mr-4">Local</Link>
        </nav>
      </div>
    </header>
  );
}

