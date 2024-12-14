import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          CS411 Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/pages/module12" className="hover:text-gray-400">
            Module 12: System & Network Defense
          </Link>
          <Link href="/pages/module17" className="hover:text-gray-400">
            Module 17: Cloud Security
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
