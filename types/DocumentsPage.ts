export type DocumentFile = {
  _key: string;
  title: string;
  fileUrl?: string; // Optional since it may be an external link instead
  externalLink?: string;
  description?: string;
};

export type SubSection = {
  title: string;
  documentLibrary: DocumentFile[];
};

export type DocumentsPage = {
  title: string;
  subSections: SubSection[];
};
