import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="my-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
