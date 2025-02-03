import React, { ReactNode } from "react";

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
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Section;
