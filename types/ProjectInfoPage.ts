export interface Card {
  _key: string;
  title: string;
  subtitle: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  alt: string;
  subheading: string;
  bulletPoints: string[];
  buttonText?: string;
  buttonLink?: string;
}

export interface ProjectInfo {
  _id: string;
  pageTitle: string;
  cards: Card[];
}
