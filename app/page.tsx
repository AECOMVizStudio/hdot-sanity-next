// n https://www.youtube.com/watch?v=OcTPaUfay5I
import { getHomePage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import Link from "next/link";

import { HomePage } from "@/types/HomePage";

export default async function Home() {
  const homePage = await getHomePage();
  console.log("Fetched home page data:", homePage); // Debugging statement

  return (
    <>
      <Section title="Project Overview">
        <PortableText value={homePage[0].projectOverview} />
      </Section>
      <Section title="Project Updates & Events">
        <PortableText value={homePage[0].projectUpdates} />
      </Section>
      <Section title="Leave a Comment">
        <PortableText value={homePage[0].leaveComment} />
        <Link href="/submit-comments">
          <Button>Leave a Comment</Button>
        </Link>
      </Section>
    </>
  );
}
