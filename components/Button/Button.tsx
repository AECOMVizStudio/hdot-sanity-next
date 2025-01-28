import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      {children}
    </button>
  );
};

export default Button;
