import { getHomePage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import Link from "next/link";

import { HomePage } from "@/types/HomePage";

export default async function Home() {
  const homePage: HomePage = await getHomePage();
  console.log("Fetched home page data:", homePage); // Debugging statement

  return (
    <>
      <div className="flex items-center w-full justify-center flex-col ">
        <h1 className="text-4xl ">{homePage.title}</h1>
        <h2 className="text-2xl text-center mt-4">{homePage.subtitle}</h2>

        <a href={homePage.headerButtonLink} className="inline-block mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            {homePage.headerButtonText}
          </button>
        </a>
      </div>

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
