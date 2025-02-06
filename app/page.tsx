import Link from "next/link";
import { getHomePage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";

import { HomePage } from "@/types/HomePage";

export default async function Home() {
  const homePage: HomePage = await getHomePage();

  return (
    <>
      <div className="relative w-full flex items-center justify-center flex-col text-white py-28">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${homePage.photoGallery[1].asset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative text-center z-10">
          <h1 className="text-4xl font-bold">{homePage.title}</h1>
          <h2 className="text-2xl text-center mt-4">{homePage.subtitle}</h2>

          <a href={homePage.headerButtonLink} className="inline-block mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg">
              {homePage.headerButtonText}
            </button>
          </a>
        </div>
      </div>

      {/* <PhotoGallery images={homePage.photoGallery} /> */}

      {homePage.sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          imageIsOnRight={section.imageIsOnRight}
          imageSrc={section.image.asset.url}
          altText={section.altText}
        >
          <PortableText value={section.content} />
          {section.buttonText && section.buttonLink && (
            <Link href={section.buttonLink} className="inline-block mt-4">
              <Button>{section.buttonText}</Button>
            </Link>
          )}
        </Section>
      ))}
    </>
  );
}
