'use client'; // This allows the menu to be interactive

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Setna Logo" 
            width={35} 
            height={35} 
            className="w-9 h-9 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-700 leading-none">SETNA</span>
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest leading-tight">Homecare</span>
          </div>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </div>

        {/* Desktop Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition font-semibold">
            Get Care
          </button>
        </div>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button 
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon (Three Lines) */}
          {!isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-inner">
          <Link href="/" className="py-3 text-gray-600 font-medium border-b border-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="py-3 text-gray-600 font-medium border-b border-gray-50" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" className="py-3 text-gray-600 font-medium border-b border-gray-50" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" className="py-3 text-gray-600 font-medium border-b border-gray-50" onClick={() => setIsOpen(false)}>Contact</Link>
          <div className="pt-4">
            <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">
              Get Care Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}