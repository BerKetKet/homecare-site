import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm">
      {/* Logo Area */}
      <div className="text-xl font-bold text-blue-600">
        HomeCare Plus
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
      </div>

      {/* Call to Action Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Care Now
      </button>
    </nav>
  );
}