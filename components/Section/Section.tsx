import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  imageIsOnRight: boolean;
  children: ReactNode;
  imageSrc: string;
  altText: string;
}

const Section = ({
  title,
  children,
  imageIsOnRight,
  imageSrc,
  altText,
}: SectionProps) => {
  return (
    <section className="my-8 p-8 bg-gray-100 rounded-lg">
      <div
        className={`flex flex-col md:flex-row items-center ${
          imageIsOnRight ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <div>{children}</div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <Image
            src={imageSrc}
            alt={altText}
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
