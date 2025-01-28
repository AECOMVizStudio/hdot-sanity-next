import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 flex items-center justify-between">
      <Logo />
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/project-information">Project Information</Link>
        </li>
        <li>
          <Link href="/document-library">Document Library</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/submit-comments">Submit Comments</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
