import { PortableTextBlock } from "next-sanity";
export interface DocumentItem {
  title: string;
  fileUrl: string;
}

export interface Event {
  title: string;
  subtitle?: string;
  description: PortableTextBlock[];
  dateTime: string;
  link?: string;
  documentsSectionTitle?: string;
  documentsList: {
    documentItem?: DocumentItem[];
  }[];
}

export interface GetInvolvedPage {
  pageTitle: string;
  upcomingEventsTitle: string;
  upcomingEventsSubtitle?: string;
  upcomingEventsList: Event[];
  pastEventsTitle: string;
  pastEventsSubtitle?: string;
  pastEventsList: Event[];
}
