import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";

const Navbar = () => {
  return (
    <nav className=" bg-white text-black p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-hdotTeal">
              Home
            </Link>
          </li>
          <li>
            <Link href="/project-information" className="hover:text-hdotTeal">
              Project Information
            </Link>
          </li>
          <li>
            <Link href="/document-library" className="hover:text-hdotTeal">
              Document Library
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-hdotTeal">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/submit-comments" className="hover:text-hdotTeal">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
