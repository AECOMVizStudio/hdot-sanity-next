import { createClient, groq } from "next-sanity";
import { HomePage } from "@/types/HomePage";
import { CommentsPage } from "@/types/CommentsPage";
import { DocumentsPage } from "@/types/DocumentsPage";
import { ProjectInfo } from "@/types/ProjectInfoPage";
import { FAQ } from "@/types/FAQPage";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function getHomePage(): Promise<HomePage> {
  try {
    const homePage = await client.fetch(
      groq`*[_type == "homePage"][0]{
        title,
        subtitle,
        headerButtonText,
        headerButtonLink,
        photoGallery[] {
          asset->{
            url
          }
        },
        sections[]{
          title,
          content,
          image{
            asset->{
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

export async function getCommentsPage(): Promise<CommentsPage | null> {
  try {
    const commentsPage: CommentsPage | null = await client.fetch(
      groq`
        *[_type == "commentsPage"][0]{
          _id,
          _createdAt,
          title,
          description,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          formSubtitle,
          formFields{
            name,
            email,
            subject,
            message,
            subscriber
          }
        }
      `
    );
    return commentsPage;
  } catch (error) {
    console.error("Failed to fetch commentsPage:", error);
    throw new Error("Failed to fetch commentsPage");
  }
}

export async function getDocumentsPage(): Promise<DocumentsPage> {
  const query = `
    *[_type == "documentsPage"][0] {
      title,
      subSections[] {
        title,
        documentLibrary[] {
          _key,  // Unique key for each document item
          title,
          "fileUrl": file.asset->url,
          externalLink,
          description
        }
      }
    }
  `;

  const documentsPage = await client.fetch(query);
  return documentsPage;
}

export async function getProjectInfo(): Promise<ProjectInfo> {
  return await client.fetch(
    groq`*[_type == "projectInfo"][0]{
      pageTitle,
      projectBackgroundText,
      projectBackgroundImage{
        asset->{
          url
        },
        altText
      },
      projectPurposeNeedText,
      projectPurposeNeedImage{
        asset->{
          url
        },
        altText
      },
      projectTimelineText,
      projectTimelineImage{
        asset->{
          url
        },
        altText
      },
      buttonText,
      buttonLink
    }`
  );
}

export async function getFAQ(): Promise<FAQ> {
  return await client.fetch(
    groq`*[_type == "faq"][0]{
      title,
      questions[]{
        question,
        answer
      }
    }`
  );
}
