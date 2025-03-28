import Link from "next/link";
import Image from "next/image";
import { getHomePage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";

import { HomePage } from "@/types/HomePage";

export default async function Home() {
  const homePage: HomePage = await getHomePage();

  return (
    <>
      <div className="w-full flex flex-col md:flex-row bg-hdotBgTeal">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={homePage.photoGallery[0].asset.url}
            alt="background image"
            width={1080}
            height={960}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-hdotTeal flex flex-col justify-center px-12 py-12 space-y-2">
          <h1 className="text-3xl font-bold">{homePage.title}</h1>
          <h2 className="text-3xl font-bold">{homePage.titleLine2}</h2>
          <h2 className="text-3xl font-bold">{homePage.titleLine3}</h2>
          <h3 className="text-xl py-4">{homePage.subtitle}</h3>
          <hr className="border-t-2 border-hdotTeal my-4 w-1/2" />

          <a href={homePage.headerButtonLink} className="inline-block">
            <button className="btn mt-6">{homePage.headerButtonText}</button>
          </a>
        </div>
      </div>

      <div className="container mx-auto">
        {homePage.sections?.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            imageIsOnRight={section.imageIsOnRight}
            isTimeline={section.isTimeline}
            isIcon={section.isIcon}
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
