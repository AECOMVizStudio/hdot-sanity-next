import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  imageIsOnRight: boolean;
  isTimeline?: boolean;
  children?: ReactNode;
  imageSrc: string;
  altText: string;
}

const Section = ({
  title,
  children,
  imageIsOnRight,
  isTimeline,
  imageSrc,
  altText,
}: SectionProps) => {
  if (isTimeline === true) {
    return (
      <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-100 shadow-lg">
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-3xl font-semibold text-hdotTeal mb-4">{title}</h2>
          <hr className="border-t-2 border-hdotTeal my-4 w-full md:w-1/2" />
        </div>
        <Image
          src={imageSrc}
          alt={altText}
          width={1000} // Adjust width as needed
          height={400} // Adjust height as needed
          className=""
        />
        <div className="text-hdotHoverTeal text-lg">{children}</div>
      </div>
    );
  } else {
    return (
      <section className={`my-8 p-8 `}>
        <div
          className={`flex flex-col md:flex-row items-center ${
            imageIsOnRight ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-3xl font-semibold text-hdotTeal mb-4">
              {title}
            </h2>
            <hr className="border-t-2 border-hdotTeal my-4 w-full md:w-1/2" />
            <div className="text-hdotHoverTeal text-lg">{children}</div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <Image
              src={imageSrc}
              alt={altText}
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className=""
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Section;
