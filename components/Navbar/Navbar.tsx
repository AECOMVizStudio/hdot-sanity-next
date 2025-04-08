'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/process', label: 'Process' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/faq', label: 'FAQ' },
  { href: '/document-library', label: 'Document Library' },
  { href: '/submit-comments', label: 'Provide Feedback' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=' bg-hdotTeal text-white p-4 '>
      <div className='container mx-auto flex items-center justify-between'>
        <Logo />

        {/* hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-white focus:outline-none'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop */}
        <ul className='hidden md:flex space-x-4'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className='hover:underline'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div
        className={`md:hidden bg-hdotTeal text-white px-4 py-2 transform transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className='flex flex-col space-y-4'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='block py-2 text-lg hover:underline'
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
