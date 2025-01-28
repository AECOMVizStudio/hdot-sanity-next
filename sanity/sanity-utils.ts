import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "cktujo7h",
    dataset: "production",
    apiVersion: "2025-01-21",
    useCdn: true,
  });

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
