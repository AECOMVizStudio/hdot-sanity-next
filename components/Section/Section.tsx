import React, { ReactNode } from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  imageIsOnRight: boolean;
  isTimeline?: boolean;
  isIcon?: boolean;
  children?: ReactNode;
  imageSrc: string;
  altText: string;
}

const Section = ({
  title,
  children,
  imageIsOnRight,
  isTimeline,
  isIcon,
  imageSrc,
  altText,
}: SectionProps) => {
  if (isTimeline === true) {
    return (
      <div className="w-full flex flex-col justify-center items-center py-12 bg-hdotBgAqua shadow-lg">
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-3xl font-semibold text-hdotTeal mb-4">{title}</h2>
          <hr className="border-t-2 border-hdotTeal my-4 w-full md:w-1/2" />
          <div className="text-hdotHoverTeal text-lg">{children}</div>
        </div>
        <div className="md:text-left "></div>
        <Image
          src={imageSrc}
          alt={altText}
          width={1000}
          height={400}
          className="w-full"
        />
      </div>
    );
  } else {
    return (
      <section className="my-8 p-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-center ${
            imageIsOnRight ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Content Section */}
          <div className="w-full md:w-1/3 text-center md:text-left p-4">
            <h2 className="text-3xl font-semibold text-hdotTeal mb-4">
              {title}
            </h2>
            <hr className="border-t-2 border-hdotTeal my-4 w-full md:w-1/2" />
            <div className="text-hdotHoverTeal text-lg">{children}</div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/3 p-4 flex">
            <Image
              src={imageSrc}
              alt={altText}
              width={isIcon ? 250 : 700} // Smaller if isIcon is true
              height={isIcon ? 250 : 400}
              className=""
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Section;
