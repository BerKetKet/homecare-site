import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="text-lg md:text-xl font-bold text-blue-700">
        Setna Homecare
      </div>

      <div className="hidden md:flex space-x-6 font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-700 transition">Home</Link>
        <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
        <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
        <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
      </div>

      <button className="bg-blue-700 text-white px-4 md:px-5 py-2 rounded-lg hover:bg-blue-800 transition text-sm md:text-base">
        Get Care Now
      </button>
    </nav>
  );
}