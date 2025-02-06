import { getDocumentsPage } from "@/sanity/sanity-utils";
import { DocumentsPage } from "@/types/DocumentsPage";

const DocumentLibrary = async () => {
  const documentsPage: DocumentsPage = await getDocumentsPage();

  console.log(documentsPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {documentsPage.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentsPage.subSections.map((section) => (
          <div
            key={section.title}
            className="bg-gray-100 p-6 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

            <ul className="space-y-2">
              {section.documentLibrary.map((doc, index) => (
                <li key={doc._key}>
                  {doc.fileUrl ? (
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      📄 {doc.title}
                    </a>
                  ) : doc.externalLink ? (
                    <a
                      href={doc.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline flex items-center"
                    >
                      🔗 {doc.title}
                    </a>
                  ) : (
                    <span className="text-gray-500">
                      {doc.title} (No file or link)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentLibrary;
