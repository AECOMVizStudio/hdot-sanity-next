import { PortableTextBlock } from "next-sanity";

export type ProjectInfo = {
  pageTitle: string;
  projectBackgroundText: PortableTextBlock[];
  projectBackgroundImage: {
    asset: {
      url: string;
    };
    altText: string;
  };

  projectTimelineText: PortableTextBlock[];
  projectTimelineImage: {
    asset: {
      url: string;
    };
    altText: string;
  };
  buttonText: string;
  buttonLink: string;
};
