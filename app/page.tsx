// n https://www.youtube.com/watch?v=OcTPaUfay5I
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import Section from "@/components/Section/Section";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects(); // projects fetched as Promise, type checked in sanity-utils.ts
  // console.log("Fetched projects:", projects);  Debugging statement

  return (
    <>
      <PhotoGallery />
      <Section title="Project Overview">
        <p>Project overview text goes here...</p>
      </Section>
      <Section title="Project Updates & Events">
        <p>Project updates and events text goes here...</p>
      </Section>
      <Section title="Leave a Comment">
        <p>If you have any comments, please leave them below:</p>
        <Link href="/submit-comments">
          <Button>Leave a Comment</Button>
        </Link>
      </Section>
    </>
  );
}
