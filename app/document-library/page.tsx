import { getDocumentsPage } from "@/sanity/sanity-utils";
import { DocumentsPage } from "@/types/DocumentsPage";

const DocumentLibrary = async () => {
  try {
    const documentsPage: DocumentsPage = await getDocumentsPage();
    console.log(documentsPage.subSections[0].documentLibrary[0].title);

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-hdotTeal mb-6">
          {documentsPage.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentsPage.subSections.map((section) => (
            <div
              key={section.title}
              className="bg-hdotBgAqua p-6 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold mb-4 underline">
                {section.title}
              </h2>

              <ul className="space-y-2">
                {section.documentLibrary.map((doc) => (
                  <li key={doc._key}>
                    {doc.fileUrl ? (
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hdotHoverTeal hover:underline flex items-center"
                      >
                        📄 {doc.title}
                      </a>
                    ) : doc.externalLink ? (
                      <a
                        href={doc.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hdotHoverTeal hover:underline flex items-center"
                      >
                        🌐 {doc.title}
                      </a>
                    ) : (
                      <span>{doc.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch documents page data:", error);
    return <div>Failed to load documents page data.</div>;
  }
};

export default DocumentLibrary;
