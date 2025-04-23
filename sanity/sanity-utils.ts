import { groq } from 'next-sanity';
import { publicClient } from '@/lib/sanity-public';
import { HomePage } from '@/types/HomePage';
import { CommentsPage } from '@/types/CommentsPage';
import { DocumentsPage } from '@/types/DocumentsPage';
import { ProjectInfo } from '@/types/ProjectInfoPage';
import { GetInvolvedPage } from '@/types/GetInvolved';
import { FAQ } from '@/types/FAQPage';

export async function getGetInvolvedPage(): Promise<GetInvolvedPage> {
  try {
    const getInvolvedPage = await publicClient.fetch(
      groq`*[_type == "getInvolved"][0]{
      
        pageTitle,
        upcomingEventsTitle,
        upcomingEventsSubtitle,
        upcomingEventsList[]{
        _key,
          title,
          subtitle,
          description,
          dateTime,
          link,
          documentsSectionTitle,
          documentsList[]{
            title,
            "fileUrl": file.asset->url
          }
        },
        pastEventsTitle,
        pastEventsSubtitle,
        pastEventsList[]{
        _key,
          title,
          subtitle,
          description,
          dateTime,
          link,
          documentsSectionTitle,
          documentsList[]{
            title,
            "fileUrl": file.asset->url
          }
        }
      }`
    );

    return getInvolvedPage;
  } catch (error) {
    console.error('Failed to fetch getInvolvedPage:', error);
    throw new Error('Failed to fetch getInvolvedPage');
  }
}

export async function getHomePage(): Promise<HomePage> {
  try {
    const homePage = await publicClient.fetch(
      groq`*[_type == "homePage"][0]{
        title,
        titleLine2,
        titleLine3,
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
          isTimeline,
          isIcon,
          buttonText,
          buttonLink
        }
      }`
    );

    return homePage;
  } catch (error) {
    console.error('Failed to fetch homePage:', error);
    throw new Error('Failed to fetch homePage');
  }
}

export function getCommentsPage(): Promise<CommentsPage> {
  return publicClient.fetch(
    groq`
      *[_type == "commentsPage"][0] {
        title,
        description,
        formSubtitle,
        mainImage{
          asset->{
            url
          },
          alt
        },
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

  const documentsPage = await publicClient.fetch(query);
  return documentsPage;
}

export async function getProjectInfo(): Promise<ProjectInfo> {
  return await publicClient.fetch(
    groq`*[_type == "projectInfo"][0]{
      _id,
      pageTitle,
      cards[]{
        _key,
        id,
        title,
        subtitle,
        image{
          asset->{
            url
          }
        },
        alt,
        subheading,
        bulletPoints,
        buttonText,
        buttonLink,
      }
    }`
  );
}

export async function getFAQ(): Promise<FAQ> {
  return await publicClient.fetch(
    groq`*[_type == "faq"][0]{
      title,
      questions[]{
        question,
        answer
      }
    }`
  );
}
