import React, { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
