import { PortableTextBlock } from 'next-sanity';

export type HomePage = {
  _id: string;
  _createdAt: Date;
  title: string;
  titleLine2?: string;
  titleLine3?: string;
  subtitle: string;
  headerButtonText: string;
  headerButtonLink: string;
  photoGallery: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
  projectOverview: PortableTextBlock[];
  projectUpdates: PortableTextBlock[];
  leaveComment: PortableTextBlock[];
  sections: HomePageSection[];
};

export type HomePageSection = {
  title: string;
  content: PortableTextBlock[];
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  altText: string;
  imageIsOnRight: boolean;
  isTimeline?: boolean;
  isIcon?: boolean;
  buttonText?: string;
  buttonLink?: string;
};
