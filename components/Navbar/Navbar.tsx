import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";

const Navbar = () => {
  return (
    <nav className=" bg-hdotTeal text-white p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/process" className="">
              Process
            </Link>
          </li>
          <li>
            <Link href="/document-library" className="">
              Document Library
            </Link>
          </li>
          <li>
            <Link href="/faq" className="">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/submit-comments" className="">
              Provide Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
