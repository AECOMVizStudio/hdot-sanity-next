import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { HomePage } from "@/types/HomePage";

const client = createClient({
  projectId: "cktujo7h",
  dataset: "production",
  apiVersion: "2025-01-21",
  useCdn: true,
});

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    );
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw new Error("Failed to fetch projects");
  }
}

export async function getHomePage(): Promise<HomePage> {
  try {
    const homePage = await client.fetch(
      groq`*[_type == "homePage"][0]{
        _id,
        _createdAt,
        title,
        photoGallery[]{
          asset->{
            _id,
            url
          }
        },
        sections[]{
          title,
          content,
          image{
            asset->{
              _id,
              url
            }
          },
          altText,
          imageIsOnRight,
          buttonText,
          buttonLink
        }
      }`
    );

    return homePage;
  } catch (error) {
    console.error("Failed to fetch homePage:", error);
    throw new Error("Failed to fetch homePage");
  }
}
