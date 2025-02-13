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
      <div className="z-10 relative w-full flex items-center justify-center flex-col text-white py-28">
        {/* To do: make it display random background image from photGallery*/}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${homePage.photoGallery[1].asset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content */}
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold">{homePage.title}</h1>
          <h2 className="text-2xl text-center mt-4">{homePage.subtitle}</h2>

          <a href={homePage.headerButtonLink} className="inline-block mt-6">
            <button className="btn">{homePage.headerButtonText}</button>
          </a>
        </div>
      </div>

      <div className="container mx-auto py-8">
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
      </div>
    </>
  );
}
