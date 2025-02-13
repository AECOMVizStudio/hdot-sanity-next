import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-4 text-center">
      <p>Footer content goes here</p>
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="mb-4 md:mb-0">
          <Image
            src="/hdot.svg"
            alt="Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="h-10"
          />
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="/terms" className="hover:underline">
            Conditions of Use
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
