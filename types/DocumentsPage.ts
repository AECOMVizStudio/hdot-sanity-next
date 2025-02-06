export type DocumentFile = {
  title: string;
  fileUrl: string;
  description?: string;
};

export type SubSection = {
  title: string;
  documents: DocumentFile[];
};

export type DocumentsPage = {
  title: string;
  subSections: SubSection[];
};
